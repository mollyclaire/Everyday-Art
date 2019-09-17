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

const artArray = ["207865", "185643", "1152", "1364", "170224", "2337", "1594", "5046",
                  "165972", "224159", "1639", "1826", "1860", "2212", "2077", "93981", "184681", "1823",
                  "2057", "2621", "60302", "112786", "169803", "166917", "172207", "184064", "112784","215887",
                  "5042", "216671", "5006", "158286", "186520", "184104", "188122", "186816", "188208", "72706",
                  "147198", "115352", "147204", "210701", "102346"];

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

// function sattoloCycle(items) {
//   for (var i = items.length-1; i > 0; i--) {
//     var j = Math.floor(Math.random() * i);
//     var tmp = items[i];
//     items[i] = items[j];
//     items[j] = tmp;
// }
// }


