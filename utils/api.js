import axios from "axios";
import { mapActions } from "vuex";

const BASE_URL = process.env.VUE_APP_BASE_URL;
const ACCESS_KEY = process.env.VUE_APP_UNSPLASH_KEY;

export default {
  getPictures() {
    return axios.get(`${BASE_URL}/photos`, {
      params: {
        client_id: `${ACCESS_KEY}`,
      },
    });
  },

  getSearchPictures(search) {
    // console.log(search);
    return axios.get(`${BASE_URL}/search/photos?query=${search}`, {
      params: {
        query: search,
        client_id: `${ACCESS_KEY}`,
      },
    });
  },
};
