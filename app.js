const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode( 'murshidabad', (err, {latitude, longitude, location})=>{

	if( err ){
		return console.log(error);
	}
	
	forecast(latitude, longitude, (err, forecastData)=>{
		if( err ){
			return console.log(err);
		}
		console.log(location);
		console.log(forecastData);
	})
});
