import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactAnimatedWeather from 'react-animated-weather'

import * as actions from '../actions'

import '../styles/Weather.css'

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'white',
  size: 50,
  animate: true
}

class Weather extends Component {

    componentDidMount = () => {
        console.log(this.props)
        setInterval(this.props.fetchWeather.request(), 120000)
    }

    render() {
    return (
        <div className='weather'>
            {this.props.weatherData.isLoading ?
            null
            :
            <div>
                <div>{this.props.weatherData.weather.currently.temperature} degrees celc</div>
                <div>{this.props.weatherData.weather.currently.windSpeed} km/h</div>
                <ReactAnimatedWeather
                    icon={'CLEAR_NIGHT'}
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


const mapStateToProps = state => {
    return {
      weatherData: state.weather
    }
  }
  
const mapDispatchToProps = dispatch => ({
    fetchWeather: bindActionCreators(actions.fetchWeather, dispatch)    
})

const WeatherContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather)

export default WeatherContainer;
