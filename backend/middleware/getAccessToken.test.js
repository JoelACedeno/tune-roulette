const request = require('supertest');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: '.env.test' });

// Add middleware to the Express app
const { getAccessToken } = require('./getAccessToken');
app.use(getAccessToken);


app.get('/test', (req, res) => {
    res.json({ accessToken: req.spotifyAccessToken });
});

describe('Integration Test', () => {
    it('should get an access token from Spotify', async () => {
        const response = await request(app).get('/test');

        expect(response.status).toBe(200);
        expect(response.body.accessToken).toBeDefined();
    });
});