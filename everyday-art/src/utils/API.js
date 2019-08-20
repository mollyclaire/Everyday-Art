import axios from "axios";

const BASEURL = "https://api.harvardartmuseums.org/Object?";
const APIKEY = "api_key=2f277b10-c374-11e9-9629-0f26e02caf08";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};