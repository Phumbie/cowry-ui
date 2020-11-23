import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;
const ACCESS_KEY = process.env.VUE_APP_UNSPLASH_KEY;

export default {
  getPictures() {
    console.log(process.env.BASE_URL);
    return axios.get(`${BASE_URL}/photos?client_id=${ACCESS_KEY}`);
  },
};
