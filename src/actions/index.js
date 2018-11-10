import axios from 'axios';



const BASE_URL = 'http://starlord.hackerearth.com/kickstarter';

export function FetchList () {
    const request =axios.get(BASE_URL);

    // console.log(request);
    return {
        type : 'HOME_PAGE',
        payload : request
    }
    

}