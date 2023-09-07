/** Sorts data from api response into respective objects based on type */
function getTrackInfo(data, type) {
    const albumInfo = {
        id: data.album.id,
        name: data.album.name,
        artist: data.artists[0].name,
        image: data.album.images[0].url,
        url: data.album.external_urls.spotify,
    };

    const trackInfo = {
        id: data.id,
        title: data.name,
        artist: data.artists[0].name,
        image: data.album.images[0].url,
        url: data.external_urls.spotify,
    };

    const artistInfo = {
        id: data.artists[0].id,
        name: data.artists[0].name,
        url: data.artists[0].external_urls.spotify,
        image: data.album.images[0].url,
    };

    if (type === 'album') {
        return { album: albumInfo };
    } else if (type === 'artist') {
        return { artist: artistInfo };
    } else {
        return { track: trackInfo };
    }
}

module.exports = { getTrackInfo };