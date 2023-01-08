//When btn is clicked run the fetch 
//set an event listener on btn 
var cityInputEl = document.querySelector('#city-input');
var searchBtnEl = document.querySelector('#search-btn');
var cityEl = document.querySelector('.city');
var weatherEl = document.querySelector('.weather');
var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={e3a777af344bc560210fcb923f97d877}';

function getApi(){
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    })
}
;

searchBtnEl.addEventListener('click',getApi);
//append the info from the API to the screen add to the div
//add search history to the local storage 
