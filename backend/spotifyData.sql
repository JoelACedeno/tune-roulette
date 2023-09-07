/* Spotify data accredited to Bruno Alarcon; imported from .CSV file into postgres.
Dataset can be found at: https://www.kaggle.com/datasets/brunoalarcon123/top-200-spotify-songs-dataset?resource=download 

Dataset information from the creator: This is a complete dataset of all the "Top 200" playlist published globally by Spotify.
Spotify introduces a new playlist each day. This dataset contains all the playlists since January 1, 2017 to May 29, 2023.
It contains more than 650k rows, which comprises 467800 songs.
This dataset has been collected from Spotify's regional chart data. In addition, this dataset has been substantially enriched with supplementary information. */

CREATE TABLE tracks (
    id SERIAL PRIMARY KEY,
    Rank VARCHAR,
    Title VARCHAR,
    Artists VARCHAR,
    Date VARCHAR,
    Danceability VARCHAR,
    Energy VARCHAR,
    Loudness VARCHAR,
    Speechiness VARCHAR,
    Acousticness VARCHAR,
    Instrumentalness VARCHAR,
    Valence VARCHAR,
    Num_of_Artist VARCHAR,
    Artist_Ind VARCHAR,
    Num_of_Nationality VARCHAR,
    Nationality VARCHAR,
    Continent VARCHAR,
    Points_Total VARCHAR,
    Points_Ind_For_Each_Artist_Nat VARCHAR,
    Song_ID VARCHAR,
    Song_URL VARCHAR
);
