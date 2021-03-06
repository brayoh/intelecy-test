import React from 'react';
import { connect } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

/** Helper methods */
import { formatMapWeatherData } from '../../utils/helpers';

const Graph = ({ weatherData }) => {
  return (
    <React.Fragment>
      {Object.keys(weatherData).length > 0 && (
        <LineChart
          width={1200}
          height={600}
          data={weatherData}
          style={{ margin: 'auto' }}
        >
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#5b9d98"
            name="temperature (degrees)"
          />
          <Line
            type="monotone"
            dataKey="tempMin"
            stroke="#83e6b4"
            name="min temperature (degrees)"
          />
          <Line
            type="monotone"
            dataKey="tempMax"
            stroke="rgba(200, 0, 0, 0.8)"
            name="max temperature (degrees)"
          />
          <CartesianGrid vertical={true} stroke="#e6f2ff" />
          <XAxis tickLine={false} dataKey="name" />
          <YAxis tickLine={false} />
          <Tooltip />
          <Legend />
        </LineChart>
      )}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    weatherData: formatMapWeatherData(state.form.weatherData),
  };
}

export default connect(mapStateToProps)(Graph);
