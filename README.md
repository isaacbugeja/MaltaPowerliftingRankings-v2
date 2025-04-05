# Malta Powerlifting Rankings v2

This project provides an automated system for generating and hosting the latest powerlifting rankings in Malta. It fetches data from OpenPowerlifting, processes it to create gender-specific JSON files, and serves them through a GitHub Pages frontend.

## Features

- **Automated Data Retrieval**: Fetches the latest powerlifting data from OpenPowerlifting.
- **Data Processing**: Processes the data to generate separate JSON files for male and female athletes.
- **Frontend Display**: Hosts a simple frontend using GitHub Pages to display the rankings.
- **Monthly Updates**: Utilizes GitHub Actions to update the rankings automatically every month.

## Repository Structure

- `backend/`: Contains scripts for data retrieval and processing.
- `malta-national-rankings/`: Directory where the generated JSON files are stored.
- `.github/workflows/`: Contains GitHub Actions workflows for automation.
- `index.html`: Frontend interface for displaying the rankings.
- `script.js`: JavaScript file to fetch and display JSON data on the frontend.
