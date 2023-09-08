const { getTrackInfo } = require('./getTrackInfo');

describe('getTrackInfo function', () => {
    it('should return album info when type is "album"', () => {
        const data = {
            album: {
                id: 'album_id',
                name: 'Album Name',
                images: [{ url: 'image_url' }],
                external_urls: { spotify: 'album_url' },
            },
            artists: [{
                id: 'artist_id',
                name: 'Artist Name',
                external_urls: { spotify: 'artist_url' }
            }],
            id: 'track_id',
            name: 'Track Name',
            external_urls: { spotify: 'track_url' },
        };

        const type = 'album';
        const result = getTrackInfo(data, type);

        expect(result).toEqual({
            album: {
                id: 'album_id',
                name: 'Album Name',
                artist: 'Artist Name',
                image: 'image_url',
                url: 'album_url',
            },
        });
    });
})