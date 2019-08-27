
import Axios from 'axios';
const baseURL = 'https://api.artsy.net/api';

// set up xap-token and set tot default headers
const instance = Axios.create({
    baseURL: baseURL + '/tokens/xapp_token',
    params: {
        'client_id': "",
        'client_secret': ""
    }
});

instance.interceptors.response.use(undefined, err => {
    const status = err.response ? err.response.status : null;
    if(status === 401){
        console.log("auth",err.response)

        instance.post(err.config.authURL, err.config.auth).then(res => {
            console.log(res);
            let token = res.data.token;
            err.config.headers['X-XAPP-Token'] = token;
            console.log('calling',err.response)
            return instance.request(err.config)
        });
    }

    return Promise.reject(err);
});



export default{

    getArtworks: function(){
        return new Promise((resolve, reject) => {
            instance.get(baseURL + '/artworks')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err);
            });
        });
    },

    getArtists: function(){
        return new Promise((resolve, reject) => {
            instance.get(baseURL + '/artists')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err);
            });
        });

    },

    getTest: function(){
        return 'hello';
    }
};