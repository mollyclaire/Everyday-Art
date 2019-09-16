// import axios from "axios";
import $ from "jquery"; 

// const BASEURL = "https://api.harvardartmuseums.org/Person?";
// const APIKEY = "apikey=7dce7550-c4e8-11e9-89d9-3df90851c6a0";

// const BASEURL = "https://collectionapi.metmuseum.org/public/collection/v1/search/isHighlight=1/"
// const BASEURL = "https://api.artsy.net/api/artists/andy-warhol"

// Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query);
    
//   }
// };

const artArray = ["1873", "207865", "185643", "1152"];

let num = artArray[Math.floor(Math.random() * artArray.length)]
console.log(num)
  


export default {
search: $.ajax({
  url: 'https://www.brooklynmuseum.org/api/v2/object/' + num,
  type: 'GET',
  beforeSend: function (xhr) {
    xhr.setRequestHeader('api_key', 'RPZUcvIfZVPE2TUM7C0ArWNxOGQIIxxF');
  },
  data: {},
  success: function () {console.log ("success")},
  error: function () {console.log("error")},
})
};



