import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

import '../styles/Weather.css'

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'white',
  size: 50,
  animate: true
}

class Weather extends Component {

    state = {
        weatherAvaliable: false
    }
    componentDidMount = () => {
        this.getWeatherInfo()
        setInterval(this.getWeatherInfo, 120000)
    }
    getWeatherInfo = async () => {
        const weather = await (await fetch('https://crossorigin.me/https://api.darksky.net/forecast/664e5ccc894fb00d19e881ce36b9b30b/-41.2888,174.7772?units=ca')).json()

        if(weather.currently.icon === 'clear-night') {
            this.setState({
                icon: 'CLEAR_NIGHT',
            })
        }
        this.setState({
            temperature: weather.currently.temperature,
            windSpeed: weather.currently.windSpeed
        })
        console.log(weather.currently)
    }

    render() {
    return (
        <div className='weather'>
            {this.state.weatherAvaliable ?
            null
            :
            <div>
                <div>{this.state.temperature} degrees celc</div>
                <div>{this.state.windSpeed} km/h</div>
                <ReactAnimatedWeather
                    icon={this.state.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
            </div>
            }
        </div>
    )
    }
}

export default Weather