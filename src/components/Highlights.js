import React from 'react'

const Highlights = (props) => {
  const { weatherData } = props
  const todayData = weatherData.consolidated_weather && weatherData.consolidated_weather[0];
  return (
    <div className="highlights--container">
      <h3>Today's Highlights</h3>
      <div className="highlights-info">
        <div className="highlights__card highlights-info__wind-status">
          <p>Wind status</p>
          <h1>{todayData && todayData.wind_speed.toFixed(0)}<span>mph</span></h1>
          <div className="wind-direction">
            <div>
              <span class="material-icons">
                navigation
            </span>
            </div>
            <p>{todayData && todayData.wind_direction_compass}</p>
          </div>
        </div>
        <div className="highlights__card highlights-info__humidity">
          <p>Humidity</p>
          <h1>{todayData && todayData.humidity.toFixed(0)}<span>%</span></h1>
          <div className="progress">
            <div className="progress__values"><span>0</span> <span>50</span> <span>100</span></div>
            <progress max="100" value={todayData && todayData.humidity.toFixed(0)}></progress>
            <div className="progress__unit"><span>%</span></div>
          </div>
        </div>
      </div>
      <div className="highlights-info">
        <div className="highlights__card highlights-info__visibility">
          <p>Visibility</p>
          <h1>{todayData && todayData.visibility.toFixed(0)} <span>miles</span></h1>
        </div>
        <div className="highlights__card highlights-info__air-pressure">
          <p>Air Pressure</p>
          <h1>{todayData && todayData.air_pressure.toFixed(0)} <span>mb</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Highlights
