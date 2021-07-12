import React, { useState } from 'react'
import useGetLocations from '../useGetLocations';
import useGetWeatherData from '../useGetWeatherData';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationId, setLocationId] = useState(44418)

  const { loading: locLoading, error: locationError, locations } = useGetLocations(searchTerm);
  const { loading: weatherLoading, error: weatherError, weatherData } = useGetWeatherData(locationId)

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  return (
    <div className="home--container">
      <Sidebar
        setSearchTerm={setSearchTerm}
        locations={locations}
        locLoading={locLoading}
        setLocationId={setLocationId}
        weatherData={weatherData}
        weatherLoading={weatherLoading}
      />
      <Dashboard
        weatherData={weatherData}
        weatherLoading={weatherLoading} />
    </div>
  )
}

export default Home
