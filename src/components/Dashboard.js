import React from 'react'
import WeekData from './WeekData';
import Highlights from "./Highlights";
import Loader from './Loader';

const Dashboard = (props) => {
  const { weatherData, weatherLoading } = props;
  return (
    <div className="dashboard--container">
      {weatherLoading ?
        <Loader /> :
        <>
          <WeekData weatherData={weatherData} />
          <Highlights weatherData={weatherData} />
        </>
      }

    </div>
  )
}

export default Dashboard
