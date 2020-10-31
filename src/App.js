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

  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
