
var cityInputEl = document.querySelector('#city-input');
var searchBtnEl = document.querySelector('#search-btn');
var cityEl = document.querySelector('.city');
var weatherEl = document.querySelector('.weather');
var apiKey ='e3a777af344bc560210fcb923f97d877';

var cityNameEl = document.querySelector('.city');
var tempEl = document.querySelector('.temp');
var windEl = document.querySelector('.wind');
var humidityEl = document.querySelector('.humidity');
var dateEl = document.querySelector('.date');


function getWeather(){
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+cityInputEl.value+'&units=imperial&appid='+apiKey;
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayCurrent(data,cityInputEl)
      console.log(data);
      localStorage.setItem('cityname',cityInputEl.value);
    })
}
;