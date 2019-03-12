
function getAPIdata() {

	// construct request
	var request = 'http://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl';

	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		//document.getElementById('weather').innerHTML = response;
		//document.getElementById('weather').innerHTML = response.weather[0].description;
	})
	// catch error
	.catch(function (error) {
		console.log('Request failed', error);
	});
}

// init data stream
getAPIdata();










/*
	var url = "http://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";
	
	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	fetch(request)
*/
