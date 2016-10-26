var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bcea89202c5a7a51a240e9106f31e214&units=imperial';
module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURI(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message) {
              throw new Error(res.data.message);
            }
            else {
              return res.data.main.temp;
            }
        }, function(error) {
            throw new Error(error.data.message);
        });
      }
    }
