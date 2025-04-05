document.addEventListener("DOMContentLoaded", function() {
    const maleRankingsContainer = document.getElementById("male-rankings");
    const femaleRankingsContainer = document.getElementById("female-rankings");
    const errorMessage = document.getElementById("error-message");
  
    const fetchAndRenderData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch('../malta-national-rankings/json/updated-rankings-male.json'),
          fetch('../malta-national-rankings/json/updated-rankings-female.json')
        ]);
  
        if (!response1.ok || !response2.ok) {
          throw new Error('Failed to fetch one or both JSON files.');
        }
  
        const [data1, data2] = await Promise.all([response1.json(), response2.json()]);
  
        maleRankingsContainer.innerHTML = renderTable(data1);
        femaleRankingsContainer.innerHTML = renderTable(data2);
      } catch (error) {
        errorMessage.textContent = error.message;
      }
    };
  
    const renderTable = (data) => {
      if (!data || data.length === 0) return '<p>No data available.</p>';
    
      const decodeUnicode = (str) => {
        try {
          return decodeURIComponent(escape(str)); // Decode UTF-8 characters
        } catch (e) {
          return str; // Return original string if decoding fails
        }
      };
    
      const headers = ['Rank', ...Object.keys(data[0])];
      const rows = data.map((row, index) => `
        <tr>
          <td class="rank">${index + 1}</td>
          ${Object.keys(row).map(key => `<td>${decodeUnicode(row[key])}</td>`).join('')}
        </tr>
      `).join('');
    
      return `
        <table>
          <thead>
            <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      `;
    };
    
  
    fetchAndRenderData();
  });
  