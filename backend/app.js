/** TuneRoulette express application. */

const express = require("express");
require('dotenv').config();
const app = express();
const ExpressError = require("./expressError")
const { getAccessToken } = require("./middleware/getAccessToken");
const { getRandomInfo } = require("./middleware/getRandomInfo");
const cors = require("cors");

// Use getAccessToken for all routes that need it
app.use(getAccessToken);

app.use(cors({ origin: 'http://localhost:3000' }));


/** Router Paths */

// Root gets the required access token from the API 
app.get('/', (req, res) => {
    const access_token = req.spotifyAccessToken;
    // console.log("Access Token:", access_token);
    return res.json(`Access Token: ${access_token}`);
});

// Route to get random track
app.get('/track', async (req, res) => {
    await getRandomInfo(req, res, 'track');
});

// Route to get random artist
app.get('/artist', async (req, res) => {
    await getRandomInfo(req, res, 'artist');
});

// Route to get random album
app.get('/album', async (req, res) => {
    await getRandomInfo(req, res, 'album');
});


/** 404 handler */
app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

/** general error handler */
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

module.exports = app;
