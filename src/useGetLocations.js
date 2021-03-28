import { useReducer, useEffect } from 'react';
import axios from 'axios';


const BASE_URl = 'https://cors.bridged.cc/https://www.metaweather.com/api/location/search'


const constants = {
  GET_LOCATIONS_INIT: 'GET_LOCATIONS_INIT',
  GET_LOCATIONS_SUCCESS: 'GET_LOCATIONS_SUCCESS',
  GET_LOCATIONS_FAILURE: 'GET_LOCATIONS_FAILURE',
  RETURN_EMPTY: 'RETURN_EMPTY'
}

const reducer = (state, action) => {
  switch (action.type) {
    case constants.GET_LOCATIONS_INIT:
      return { ...state, loading: true }
    case constants.GET_LOCATIONS_SUCCESS:
      return { ...state, loading: false, locations: action.payload.locations }
    case constants.GET_LOCATIONS_FAILURE:
      return { ...state, loading: false, error: action.payload.error, }
    case constants.RETURN_EMPTY:
      return { ...state, loading: false, locations:[]}
    default:
      return state;
  }
}

let timeout;
const debounce = (func, delay) => {
  clearTimeout(timeout);
  timeout = setTimeout(func, delay)
}

const useGetLocations = (params) => {
  const [state, dispatch] = useReducer(reducer, { loading: false, locations: [] })

  const makeApiCall = () => {
    if (params === '') {
      dispatch({ type: constants.RETURN_EMPTY });
    }
    else {
      dispatch({ type: constants.GET_LOCATIONS_INIT });
      axios.get(BASE_URl, {
        params: { query: params }
      }).then((res) => {
        console.log(res.data)
        dispatch({ type: constants.GET_LOCATIONS_SUCCESS, payload: { locations: res.data } })
      }).catch((e) => {
        dispatch({ type: constants.GET_LOCATIONS_FAILURE, payload: { error: e } })
      })
    }
  }

  useEffect(() => {
    debounce(makeApiCall, 1000);
  }, [params])

  return state;
}

export default useGetLocations;