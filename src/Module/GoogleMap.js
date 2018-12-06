import axios from 'axios';

const keyGoogleMap = "AIzaSyDQQEd-25h1vNZwMxk1z-odE3EqAO6__UU";

export const test = (region, value) => {
    return axios({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?components=country%3A${region}&input=${value}&types=(cities)&key=${keyGoogleMap}`,
        headers: {
            'Accept': 'application/json'
        }
    })

};