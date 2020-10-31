import React from 'react';

// import components
import { 
  Cards,
  Chart,
  CountryPicker,
} from './components';


class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App;
