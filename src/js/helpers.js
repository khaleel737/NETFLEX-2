import { timeout } from 'async';
import { API_URL, KEY } from './config.js';
import { async } from 'regenerator-runtime'





export const AJAX = async function (url = '', data = undefined) {
    try {
        const fetchURL =  data ? fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }) : fetch(url)


        const response = await Promise.race([fetchURL])
        const movieData = await response.json()

          if(!response.ok) throw new Error(`${movieData.message} ${response.status}`)
          return movieData; // parses JSON response into native JavaScript objects
    
    } catch (err){
        
       throw (err);
    }
}

// export const loadRecipe = async function (Movies, timeWindow) {
  

//     // const data = await AJAX(`${API_URL}/trending/${Movies}/${timeWindow}?api_key=${KEY}`);

//     console.log(data);

// }
// loadRecipe('all', 'day')

