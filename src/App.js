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
}

  async componentDidMount() {
    // set to state to pass down the data
    const fetchedData = await fetchData();

   this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
