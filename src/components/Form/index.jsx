import React from 'react';
import { connect } from 'react-redux';

/** actions */
import { fetchWeatherForeCast } from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      showErr: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitCityName = this.submitCityName.bind(this);
  }

  handleChange(event) {
    this.setState({ cityName: event.target.value });
  }

  submitCityName() {
    // validate form
    if (this.state.cityName.length >= 1) {
      this.setState({ showErr: false });

      // fetch data from api
      this.props.fetchWeatherForeCastHandler(this.state.cityName);
    } else {
      this.setState({ showErr: true });
    }
  }

  render() {
    const { loading, error } = this.props;

    return (
      <div className="form">
        <h1>Intelecy challenge!</h1>
        <input
          type="text"
          placeholder="Enter a city"
          value={this.state.cityName}
          onChange={this.handleChange}
        />
        <p className="error-msg">
          {this.state.showErr ? 'Field cannot be empty' : ''}
          {error && error}
        </p>
        <button
          disabled={loading}
          className="btn"
          onClick={this.submitCityName}
        >
          {loading ? 'Fetching data...' : 'Search'}
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWeatherForeCastHandler: path => {
      dispatch(fetchWeatherForeCast(path));
    },
  };
}

function mapStateToProps(state) {
  return {
    loading: state.form.loading,
    error: state.form.error,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
