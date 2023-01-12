//When btn is clicked run the fetch 
//set an event listener on btn 
console.log('hello');
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
// function displayCurrent(data,cityInputEl){

//   var currentWeather = document.getElementById('#current');
  
//   var currentHeader = document.createElement('h2');
//   var currentTemp = document.createElement('p');
//   var currentHumidity = document.createElement('p');
//   var currentWind = document.createElement('p');

//   humidityEl.textContent = 'Humidity: ' + data.list[0].main.humidity + " %";
//   currentHeader.textContent = cityInputEl+ ' (' + date + ')';
//   currentTemp.innerHTML = 'Temp: ' + data.daily[0].temp.day;
//   currentHumidity.textContent = 'Humidity: ' + data.daily[0].humidity + '%';
//   currentWind.textContent = 'Wind: ' + data.daily[0].wind_speed + ' MPH';
//   tempEl.textContent = 'Temperature: ' + data.list[0].main.temp;
//   windEl.textContent = 'Wind: ' + data.list[0].wind.speed;
//   cityNameEl.textContent = 'City: ' + data.city.name;
//   var cityNameEl = document.querySelector('.city');
//   var tempEl = document.querySelector('.temp');
//   var windEl = document.querySelector('.wind');
//   var humidityEl = document.querySelector('.humidity');
//   var dateEl = document.querySelector('.date');
// }
 
// //create the element in javascript and then append that element to the div through appendchild 
// //key is the city that should be logged 
// // console.log(getApi);

// searchBtnEl.addEventListener('click',getApi);
// //append the info from the API to the screen add to the div
// //append city name, date, temp, wind, humidity 
// //add search history to the local storage 
