//When btn is clicked run the fetch 
//set an event listener on btn 
console.log('hello');
var cityInputEl = document.querySelector('#city-input');
var searchBtnEl = document.querySelector('#search-btn');
var cityEl = document.querySelector('.city');
var weatherEl = document.querySelector('.weather');
var apiKey ='e3a777af344bc560210fcb923f97d877';
var city;
var temp;
var wind;
var humidityEl = document.querySelector('.humidity');
var date;

function getApi(){
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+cityInputEl.value+'&units=imperial&appid='+apiKey;
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      localStorage.setItem('cityname',cityInputEl.value);
      humidityEl.textContent = 'Humidity ' + data.list[0].main.humidity + " %";

    })
}
;
 
//key is the city that should be logged 
// console.log(getApi);

searchBtnEl.addEventListener('click',getApi);
//append the info from the API to the screen add to the div
//append city name, date, temp, wind, humidity 
//add search history to the local storage 
