import TuneRouletteApi from './Api';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('TuneRouletteApi', () => {
    let axiosMock;

    beforeAll(() => {
        axiosMock = new MockAdapter(axios);
    });

    afterEach(() => {
        axiosMock.reset();
    });

    it('should fetch the token', async () => {
        const expectedToken = { 'Access Token': 'token_data' };
        axiosMock.onGet('http://localhost:5000/').reply(200, expectedToken);

        const token = await TuneRouletteApi.getToken();

        expect(token).toEqual(expectedToken);
    });

    it('should fetch track data', async () => {
        const expectedData = { 'track': 'track_data' };
        axiosMock.onGet('http://localhost:5000/track').reply(200, expectedData);

        const data = await TuneRouletteApi.getTrack();

        expect(data).toEqual(expectedData);
    });

    it('should fetch artist data', async () => {
        const expectedData = { 'artist': 'artist_data' };
        axiosMock.onGet('http://localhost:5000/artist').reply(200, expectedData);

        const data = await TuneRouletteApi.getArtist();

        expect(data).toEqual(expectedData);
    });

    it('should fetch album data', async () => {
        const expectedData = { 'album': 'album_data' };
        axiosMock.onGet('http://localhost:5000/album').reply(200, expectedData);

        const data = await TuneRouletteApi.getAlbum();

        expect(data).toEqual(expectedData);
    });


})