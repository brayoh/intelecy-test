import {
  INITIAL_STATE,
  FETCH_WEATHER_FORECAST_BEGIN,
  FETCH_WEATHER_FORECAST_SUCCESS,
  FETCH_WEATHER_FORECAST_FAILURE,
} from './actionTypes';

const form = (
  state = {
    weatherData: {},
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case INITIAL_STATE: {
      return action.state;
    }

    case FETCH_WEATHER_FORECAST_BEGIN: {
      const newState = {
        ...state,
        loading: true,
      };

      return newState;
    }

    case FETCH_WEATHER_FORECAST_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        weatherData: action.data,
      };

      return newState;
    }

    case FETCH_WEATHER_FORECAST_FAILURE: {
      const newState = {
        ...state,
        loading: false,
        error: action.erro,
      };

      return newState;
    }

    default:
      return state;
  }
};

export default form;
