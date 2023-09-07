const axios = require('axios');
const { getRandomId } = require("./getRandomId");
const { getTrackInfo } = require("./getTrackInfo");

const API_BASE_URL = "https://api.spotify.com/v1"

// Function to get random information from API
async function getRandomInfo(req, res, type) {
    // Access token obtained from middleware
    const access_token = req.spotifyAccessToken;

    // Generate a random track ID
    const trackId = await getRandomId();
    console.log('trackId:', trackId);

    try {
        // Send GET response to API for track data with required access token included
        const response = await axios.get(`${API_BASE_URL}/tracks/${trackId}`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        // Pass data along to get specific track information
        const info = getTrackInfo(response.data, type);
        console.log(`${type} info:`, info);

        // Send the info as JSON response
        return res.json(info);
    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: 'Not Found' });
    }
}

module.exports = { getRandomInfo };
