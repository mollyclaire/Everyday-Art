import axios from "axios";

// const BASEURL = "https://api.harvardartmuseums.org/Person?";
// const APIKEY = "apikey=7dce7550-c4e8-11e9-89d9-3df90851c6a0";
const BASEURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
    
  }
};