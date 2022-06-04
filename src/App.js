//Tools
import React, { Component } from 'react';

//Components
import Form from './components/Form';
import Weather from './components/Weather';

//API
const API_KEY = '55f312fd832c9d859ce71b17d6a9bc5f';

class App extends Component
{

  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  };


  getWeather = async (e) =>
  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city }%2C${ country }&appid=${ API_KEY }`);
    const data = await api.json();
    console.log(data);
    this.setState({
      tempreature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: 'pleace enter data'
    });
  };
  render()
  {
    return (
      <div className='App'>
        <Form getWeather={ this.getWeather } />
        <Weather
          tempreature={ this.state.tempreature }
          city={ this.state.city }
          country={ this.state.country }
          humidity={ this.state.humidity }
          description={ this.state.description }
          error={ this.state.error }
        />
      </div>
    );
  }
}

export default App;
