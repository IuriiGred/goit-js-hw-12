import axios from 'axios';

const API_KEY = '50797818-4d1ec28dd028369cf30507a0a';
const link = 'https://pixabay.com/api/'
export function getImagesByQuery(query){
        
    return axios
        .get(link, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
        })
        .then(response => {
            
            if(response.data.hits.length === 0){
                throw new Error(message);
            }
            
            return response.data.hits;
        })
        .catch(error => {

        return null;
        });
}
