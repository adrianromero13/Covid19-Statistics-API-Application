import React from 'react';

// import components
import {
  Cards,
  Chart,
  CountryPicker,
} from './components';
import { fetchData } from './api';

// import assets
import styles from './App.module.css';
import covidImage from './images/covid-19Image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    // set to state to pass down the data
    const data = await fetchData();

    this.setState({ data });
  }
  // set up a handle change function for countries
  handleCountryChange = async (country) => {
    // fetch the data
    const data = await fetchData(country);
    // set the state
    this.setState({ data, country: country })
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt='COVID-19' />
        <Cards data={data} country={country}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
