import React, { useState } from 'react'
import Shower from '../assets/Shower.png'
import SearchBar from "./SearchBar";
import moment from "moment";
import Loader from "./Loader";
import thunderStorm from '../assets/Thunderstorm.png';
import clear from '../assets/Clear.png';
import hail from "../assets/Hail.png";
import heavyCloud from '../assets/HeavyCloud.png';
import heavyRain from '../assets/HeavyRain.png';
import lightRain from "../assets/LightRain.png";
import lightCloud from '../assets/LightCloud.png';
import shower from '../assets/Shower.png';
import sleet from '../assets/Sleet.png';
import snow from '../assets/Snow.png';

const weatherImages = {
  t: thunderStorm,
  sn: snow,
  sl: sleet,
  h: hail,
  hr: heavyRain,
  lr: lightRain,
  s: shower,
  hc: heavyCloud,
  lc: lightCloud,
  c: clear
}

const Sidebar = (props) => {
  const { setSearchTerm, setLocationId, locations, locLoading, weatherData, weatherLoading } = props;
  const [searchBar, toggleSearchBar] = useState(false);
  const todayData = weatherData.consolidated_weather && weatherData.consolidated_weather[0];
  return (
    <div className="sidebar">
      {weatherLoading ?
        <Loader /> :
        <>
          <div className="sidebar-header">
            <button className="sidebar-header__search-btn" onClick={() => toggleSearchBar(!searchBar)}>Search for places</button>
            <div className="sidebar-header__gps-btn" >
              <span className="material-icons">
                gps_fixed
              </span>
            </div>
          </div>
          <div className="sidebar-graphics">
            <img src={todayData && weatherImages[todayData.weather_state_abbr]} alt="" />
          </div>
          <div className="sidebar-info">
            <div className="sidebar-info__temperature">
              <h1>{todayData && todayData.max_temp.toFixed(0)}<span className="sidebar-info__temperature--unit">&#8451;</span></h1>
            </div>
            <div className="sidebar-info__weather-status">
              <h4>{todayData && todayData.weather_state_name}</h4>
            </div>
            <div className="sidebar-info--meta">
              <div className="sidebar-info__date">
                <p>{moment(todayData && todayData.applicable_date).format("MMM Do YY")}</p>
              </div>
              <div className="sidebar-info__location">
                <span className="material-icons">
                  room
              </span>
                <h5>{weatherData.title}</h5>
              </div>
            </div>
          </div>
        </>
      }
      <SearchBar
        visible={searchBar}
        toggleSearchBar={toggleSearchBar}
        setSearchTerm={setSearchTerm}
        locations={locations}
        locLoading={locLoading}
        setLocationId={setLocationId}
       />
    </div>
  )
}

export default Sidebar
