const db = require("../db");
const { getRandomInt } = require("../helpers/getRandomInt")

/** Gets a random track ID from the database
 * 
 * From a range of track ID's in the database, this returns one randomly with the help of getRandomInt() */
async function getRandomId() {
    try {
        // Determine the range of track IDs
        const minMaxQuery = await db.query('SELECT MIN(id) as min_id, MAX(id) as max_id FROM tracks');
        const minID = minMaxQuery.rows[0].min_id;
        const maxID = minMaxQuery.rows[0].max_id;

        // Generate a random track ID
        const randomTrackID = getRandomInt(parseInt(minID), parseInt(maxID));
        // Query the database for the random track
        const queryText = 'SELECT song_id FROM tracks WHERE id = $1';
        const result = await db.query(queryText, [randomTrackID]);

        // Return the random track
        return result.rows[0].song_id;
    } catch (error) {
        console.error('Error fetching random track:', error);
        throw error;
    }
};

module.exports = { getRandomId };