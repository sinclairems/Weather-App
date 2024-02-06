// Notes from BCS: 
var APIKey = "99689e0743da7c7ac47a8052ced29530";
// Variable to store the user input city name
var city;

// Construct a query call to make the API call
// OpenWeather API Call:
// Currently showing Chicago lon and lat and excluding minutely, hourly, and alerts
var queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=33.4&lon=-94.04&exclude=minutely,hourly,alerts&appid=99689e0743da7c7ac47a8052ced29530"

fetch(queryURL) // need to adjust app to accept user input to store in var city 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });


    // fetch
    // name
    // insert text content from that data
    // https://jsonplaceholder.typicode.com/

    // FROM SANDY SMITH
    // Gather APIs
    // var weatherUrl = ""
    // var apiKey= ""
    // var geoUrl = ""

    // Identify all ids from html
    // main container: #weatherApp (probably won't need to use this one)
    // search button id: #searchCity (to save past searches in local storage)
    // local storage container: #localStorage (Display city)
    // current weather container: #current (Display city, date, temp, wind(mph), humidity)
    // extended forecast container: #extendedForecast (Display city, date, temp, wind(mph), humidity)

