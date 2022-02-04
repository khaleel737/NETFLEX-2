'use strict';

import { AJAX } from './helpers.js';

import { API_URL, KEY } from './config.js'


export const loadRecipe = async function (Movies, timeWindow) {
    try {

        const data = await AJAX(`${API_URL}/trending/${Movies}/${timeWindow}?api_key=${KEY}`);

        const dataTwo = await AJAX(`${API_URL}/trending/${'all'}/${'week'}?api_key=${KEY}`);


        const slider = document.querySelector('.slider-flex');

       const sliderMaker = dataTwo.results.map(trending => {

           const trendingSlider = `<div style="background-image: url('https://image.tmdb.org/t/p/w500/${trending.backdrop_path}');" class='Trending boxes'><h3>${trending.original_title}</h3></div>`

           console.log(trending);

        slider.insertAdjacentHTML('afterbegin', trendingSlider)
        
        });

    //    const sliderMakerImage = dataTwo.results.map(trending => trending.poster_path);

    //    console.log(sliderMakerImage);


        //             const trendingSlider = `<div class='Trending boxes'><h3>${sliderMaker}</h3></div>`

        // slider.insertAdjacentHTML('afterbegin', trendingSlider)

        //     console.log(sliderMaker);
        // const data = await AJAX(`${API_URL}?api_key=${KEY}`);
        // console.log(data);

        // const dataTwo = await data.json();

    //     console.log(dataTwo);
    //     const movieTesting = await fetch (`https://api.themoviedb.org/3/movie/76341?api_key=${KEY}`);

    //     const movieData = await movieTesting.json();

    //     console.log(movieData);
        


    //     console.log(movieDataTwo.backdrops[0].file_path);
        
    //     console.log(`https://image.tmdb.org/t/p/w500${movieDataTwo.backdrops[0].file_path}`);


    //    const Div = document.getElementsByClassName('Comedies')[0].style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieDataTwo.backdrops[8].file_path})`
    //    document.getElementsByClassName('Comedies')[0].style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieDataTwo.backdrops[8].file_path})`
    //    document.getElementsByClassName('Comedies')[2].style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieDataTwo.backdrops[2].file_path})`
    //    document.getElementsByClassName('Comedies')[1].style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieDataTwo.backdrops[1].file_path})`

    //     console.log(Div);

        

        // .style.backGroundImage = `url(https://image.tmdb.org/t/p/w500${movieDataTwo.backdrops[0].file_path})`;

    } catch (err) {
        // Temp error handling
        console.error(`😵 ${err} 😵`);
        throw err;
    }

}

loadRecipe('all', 'day')
loadRecipe('all', 'week')


let button = document.querySelector('.button');
let testA = document.querySelector('a');
let backgroundButton = document.querySelector('.background__button');

  button.addEventListener('mouseenter', function(){
    testA.classList.add('is-white')
    backgroundButton.classList.add('is-hover');
  });

  button.addEventListener('mouseleave', function(){
    testA.classList.remove('is-white')
    backgroundButton.classList.remove('is-hover');
  });