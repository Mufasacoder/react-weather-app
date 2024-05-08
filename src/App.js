
import './App.css';
import {WEATHER_API_URL, WEATHER_API_KEY} from ""
import { useState } from 'react';

import Search from '.compnonents/search/search';
//import {'api_link'} from '..api';
import currentWeather from './components/current-weather/current-weather';
import 

function App() {
  
    const[];
    const[];
  
    const handleOnSearch = (searchData) => {
      //console.log(searchData);
      const [ lat,lon] = searchData.value.split(" ");

    const currentWeatherFetch =  fetch(`{}  )
    const forecastFetch = fetch()

    promise.all([currentWeatherFetch, forecastFetch])
      .then(async(repsonse)) =>{
          const weatherResponse = await response[0] .json();
          const foreacastResponse = await response[1] .json();

        }
          setCurrentWeather(weatherResponse);
          setForecast(forecast);
    //api
   }
    return (
      <div className = "container">
        <search onSearchChange ={handleOnSearch} />
        < CurrentWeather />

        
        
        
        
        
        </div>
  
        
        
      
  
    )

  
}

export default App;
