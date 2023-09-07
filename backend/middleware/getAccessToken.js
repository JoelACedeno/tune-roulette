const axios = require("axios");

// Environment variables
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

if (!client_id || !client_secret) {
    console.error("Missing Spotify client credentials.");
    process.exit(1);
}

/** Gets the required access token from the Spotify API */
const getAccessToken = async (req, res, next) => {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'client_credentials'
            },
            auth: {
                username: client_id,
                password: client_secret,
            },
        });

        req.spotifyAccessToken = response.data.access_token;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

module.exports = { getAccessToken };