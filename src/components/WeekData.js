import React from 'react'
import moment from 'moment';
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

const WeekDay = (weekDay) => {
  return (
    <div className="card card--day">
      <p>{moment(weekDay.day.applicable_date).format("MMM Do YY")}</p>
      <img src={weatherImages[weekDay.day.weather_state_abbr]} alt="" />
      <div className="card--day-temperature">
        <p className="max-temp">{weekDay.day.max_temp.toFixed(0)}&#8451;</p>
        <p className="min-temp">{weekDay.day.min_temp.toFixed(0)}&#8451;</p>
      </div>
    </div>
  )
}


const WeekData = (props) => {
  const { weatherData } = props;
  let weekData = weatherData.consolidated_weather ? weatherData.consolidated_weather.slice(1, 6) : []
  return (
    <div className="weekdata--container">
      {weekData && weekData.map((weekDay, index) => {
        return (
          <WeekDay key={index} day={weekDay} />
        )
      })}
    </div>
  )
}

export default WeekData
