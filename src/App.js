import React from 'react';

// import components
import { 
  Cards,
  Chart,
  CountryPicker,
} from './components';
import { fetchData } from './api';

// import styling
import styles from './App.module.css';


class App extends React.Component {
state = {
  data: {},
  country: '',
}

  async componentDidMount() {
    // set to state to pass down the data
    const fetchedData = await fetchData();

   this.setState({ data: fetchedData });
  }
// set up a handle change function for countries
handleCountryChange = async (country) => {
   // fetch the data
   // set the state
}

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    )
  }
}

export default App;
