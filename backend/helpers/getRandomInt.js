/** Helper function to generate a random integer within a range (inclusive) */
function getRandomInt(min, max) {
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
}

module.exports = { getRandomInt };