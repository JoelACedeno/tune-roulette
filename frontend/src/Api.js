import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class TuneRouletteApi {
    static async getToken() {
        const res = await axios.get(`${BASE_API_URL}/`);
        console.log("getting token:", res.data);
        return res.data;
    }

    static async getTrack() {
        const res = await axios.get(`${BASE_API_URL}/track`);
        // console.log("Logging track data:", res.data);
        return res.data;
    }

    static async getArtist() {
        const res = await axios.get(`${BASE_API_URL}/artist`);
        // console.log("Logging artist data:", res.data);
        return res.data;
    }

    static async getAlbum() {
        const res = await axios.get(`${BASE_API_URL}/album`);
        // console.log("Logging album data:", res.data);
        return res.data;
    }
}

export default TuneRouletteApi;