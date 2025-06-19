import axios from 'axios';
import { showLoadMoreButton } from './render-functions';

const API_KEY = '50797818-4d1ec28dd028369cf30507a0a';
const link = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1, quantity = 1){

    const result = await axios(link, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: quantity,
            page,
        },
    })
        
    return result.data;
}
























        
// return response.data;
        
    // return await axios
    //     .get(link, {
    //     params: {
    //         key: API_KEY,
    //         q: query,
    //         image_type: 'photo',
    //         orientation: 'horizontal',
    //         safesearch: true,
    //         per_page: 9,
    //         page: 1,
    //     },
    //     })
    //     .then(response => {
    //         console.log(response);
            
    //         if(response.data.hits.length === 0){
    //             throw new Error(message);
    //         }
            
    //         return response.data.hits;
    //     })
    //     .catch(error => {

    //     return null;
    //     });
