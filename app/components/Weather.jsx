var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(location) {
        var self = this;
        this.state.isLoading = true;
        openWeatherMap.getTemp(location).then(function(temp) {
            self.setState({location: location, temp: temp, isLoading:false});

        }, function(error) {
            console.log(error.message);
            self.setState({isLoading:false})
        });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
              return <h3>Weather Loading....</h3>;
            } else {
                if (temp && location) {
                    return <WeatherMessage location={location} temp={temp}/>;
                }
            }
        }
        return (
            <div>
                <h1>Weather App</h1>
                <WeatherForm onSearch={this.handleSearch} location={location}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
