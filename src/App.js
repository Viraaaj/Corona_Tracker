import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from "./api";

import coronaLogo from './images/covid-logo.png'

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country:country });
  }

  render() {

    const {data, country} = this.state;
    return (
      <div className={styles.container}>

        <img className={styles.image} src={coronaLogo} alt="Covid-19"/>
        
        <Cards data={data} />
        <CountryPicker  handleCountryChange ={this.handleCountryChange} />
        <Chart data= {data} country={country}/>

        <h3><a href="https://github.com/Viraaaj/Corona_Tracker" target="_blank">Viraj/Covid-19 Tracker</a></h3>
      
      </div>

    )
  }
}

export default App;
