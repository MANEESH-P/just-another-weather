import { useReducer, useEffect } from 'react';
import axios from 'axios';


const BASE_URl = 'https://cors.bridged.cc/https://www.metaweather.com/api/location'


const constants = {
  GET_WEATHER_INIT: 'GET_WEATHER_INIT',
  GET_WEATHER_SUCCESS: 'GET_WEATHER_SUCCESS',
  GET_WEATHER_FAILURE: 'GET_WEATHER_FAILURE'
}

const reducer = (state, action) => {
  switch (action.type) {
    case constants.GET_WEATHER_INIT:
      return { ...state, loading: true }
    case constants.GET_WEATHER_SUCCESS:
      return { ...state, loading: false, weatherData: action.payload.weatherData }
    case constants.GET_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload.error, }
    default:
      return state;
  }
}

const useGetWeatherData = (locationId) => {
  const [state, dispatch] = useReducer(reducer, { loading: false, weatherData: [] })

  const makeApiCall = () => {
    dispatch({ type: constants.GET_WEATHER_INIT });
    axios.get(`${BASE_URl}/${locationId}`).then((res) => {
      console.log(res.data);
      dispatch({ type: constants.GET_WEATHER_SUCCESS, payload: { weatherData: res.data } })
    }).catch((e) => {
      console.log(e)
      dispatch({ type: constants.GET_WEATHER_FAILURE, payload: { error: e } })
    })
  }

  useEffect(() => {
    locationId && makeApiCall();
  }, [locationId])

  return state;
}

export default useGetWeatherData;