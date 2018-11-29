import GoogleMap from '@google/maps';

const googleMapsClient = GoogleMap.createClient({
    key: 'AIzaSyD_ZErRjcvgMsCyeeSDSgVfSe7EF-2r7UA',
    Promise: Promise
});

export const search = () => {

    let request = {
        input: 'Brisbane',
        sessiontoken: 'AIzaSyD_ZErRjcvgMsCyeeSDSgVfSe7EF-2r7UA',
        types: '(cities)',
        language: 'us'
    };

    googleMapsClient.placesAutoComplete(request)
        .asPromise()
        .then((response) => {
            console.log(response.json.results);
        })
        .catch((err) => {
            console.log(err);
        });
};