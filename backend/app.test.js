const request = require('supertest');
const app = require('./app');

describe('Express App', () => {
    it('should respond with access token on root route', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toContain('Access Token:');
    });

    it('should respond with a random track on /track route', async () => {
        const response = await request(app).get('/track');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('track');
    });

    it('should respond with a random artist on /artist route', async () => {
        const response = await request(app).get('/artist');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('artist');
    });

    it('should respond with a random album on /album route', async () => {
        const response = await request(app).get('/album');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('album');
    });

    it('should handle 404 errors', async () => {
        const response = await request(app).get('/not-a-route');
        expect(response.status).toBe(404);
    });
});
