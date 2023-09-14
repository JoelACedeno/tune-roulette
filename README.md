# tune-roulette
TuneRoulette Capstone Project

This application “TuneRoulette” is a full stack web app that randomly generates a song, album or artist using the Spotify API. The website is built using Node JS for the back-end and React JS for the front-end. The goal for this project is to provide users with random music suggestions based on the criteria provided. The targeted demographic for this service is music enjoyers who like exploring different genres and different areas of the music that they may not be familiar with. If nothing else, this app could be a fun way for a user to be provided with random music suggestions. 

In terms of functionality, this app uses Spotify API to harvest its data. The data returned will be determined by the criteria the user selects. The user will be provided with options to generate a random song, album or artist. Based on the selection, the app will return from the API a title/name, the respective artwork for the result, and a URL. The URL will be used to navigate to the page in the Spotify player for the result generated, and the title/name will be displayed alongside the artwork.

In order to fetch data from Spotify's API, an external dataset found at https://www.kaggle.com/datasets/brunoalarcon123/top-200-spotify-songs-dataset?resource=download is needed to harvest a large quantity of legitimate Spotify Track ID's. The CSV file from the mentioned link needs to be seeded into a database with the schema design found in `spotifyData.sql`.
Dataset information from the creator: 
    > This is a complete dataset of all the "Top 200" playlist published globally by Spotify.
    > Spotify introduces a new playlist each day. This dataset contains all the playlists since January 1, 2017 to May 29, 2023.
    > It contains more than 650k rows, which comprises 467800 songs.
    > This dataset has been collected from Spotify's regional chart data. In addition, this dataset has been substantially enriched with supplementary information.

The Track ID from the aformentioned dataset is used with Spotify's "Get Track" API method to return an "Album" object. The "Album" object contains all of the necessary data for TuneRoulette to run, keeping the number of Spotify API calls low. 

To start the front-end, from the frontend directory input `npm start` in the command line. To start the back-end, from the backend directory input `nodemon server.js` in the command line.
Tests can be found in both frontend and backend directories. To run a specific test, in the correct directory input `npm test (name of test file)`.

Flow charts are inlcuded for both the front-end and back-end of the app.
