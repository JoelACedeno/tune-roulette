const db = require('../db');
const { getRandomId } = require('./getRandomId');

describe('getRandomId function', () => {
    // Mock database query function
    db.query = jest.fn();

    it('should return a random song_id', async () => {
        // Mock database query result
        const minMaxQueryResult = { rows: [{ min_id: 1, max_id: 10 }] };
        const randomTrackID = 5;
        const queryResult = { rows: [{ song_id: 'some_song_id' }] };

        // Mock database query to return expected results
        db.query
            .mockResolvedValueOnce(minMaxQueryResult)
            .mockResolvedValueOnce(queryResult);

        const result = await getRandomId();
        expect(result).toBe('some_song_id');
    });

    it('should handle errors', async () => {
        db.query.mockRejectedValue(new Error('Database error'));

        try {
            await getRandomId();
        } catch (error) {
            expect(error.message).toBe('Database error');
        }
    });
});
