import moment from 'moment';

/**
 * Helper method for format data from openweathermap.org to an array consumbable
 * by recharts
 *
 * @param {Array} weatherData
 */
export function formatMapWeatherData(weatherData) {
  const mapData = [];

  if (Object.keys(weatherData).length) {
    weatherData.list.map(day => {
      mapData.push({
        name: moment.unix(day.dt).format('DD/MM/YYYY'),
        temp: day.main.temp,
        tempMax: day.main.temp_max,
        tempMin: day.main.temp_min,
      });
    });
  }

  return mapData;
}
