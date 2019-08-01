import {
  FETCH_WEATHER_FORECAST_FAILURE,
  FETCH_WEATHER_FORECAST_BEGIN,
  FETCH_WEATHER_FORECAST_SUCCESS,
} from '../reducers/actionTypes';

/** axios instance */
import API from '../utils/API';

/** constants */
import { APP_ID } from '../utils/constants';

export const initialState = state => ({
  state,
  type: 'INITIAL_STATE',
});

/**
 * Initiate request to fetch data
 *
 * @returns
 */
const fetchWeatherForeCastBegin = () => {
  return {
    type: FETCH_WEATHER_FORECAST_BEGIN,
  };
};

/**
 * Data fetch was successful
 *
 * @param {*} data
 * @returns
 */
const fetchWeatherForeCastSuccess = data => {
  return {
    type: FETCH_WEATHER_FORECAST_SUCCESS,
    data,
  };
};

/**
 * Data fetch failed
 *
 * @param {*} error
 * @returns
 */
const fetchWeatherForeCastError = error => {
  return {
    type: FETCH_WEATHER_FORECAST_FAILURE,
    error,
  };
};

/**
 * Axios request to fetch weather data for specificied city
 *
 * @export
 * @param {*} cityName
 * @returns
 */
export function fetchWeatherForeCast(cityName) {
  return dispatch => {
    dispatch(fetchWeatherForeCastBegin());

    API.request({
      method: 'GET',
      params: {
        q: cityName,
        appid: APP_ID,
      },
    })
      .then(response => dispatch(fetchWeatherForeCastSuccess(response.data)))
      .catch(error => dispatch(fetchWeatherForeCastError(error.message)));
  };
}
