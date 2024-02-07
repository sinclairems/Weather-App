var searchBtn = document.getElementById("searchBtn"); // for click event
var searchInput = document.getElementById("searchInput") // user's city input
var pastResults = document.getElementById("pastResults") // local storage to store and render past results
var currentWeather = document.getElementById("currentWeather") // current weather
var extendedForecast = document.getElementById("extendedForecast") //extended forecast
var APIKey = "99689e0743da7c7ac47a8052ced29530";


// APP STARTS HERE!
// Event listener for search input box -> go to a function to validate input
searchBtn.addEventListener("click", searchCity)

// Add date with day.js to each container

// function to validate search input value -> assign it a var -> go to next function to get city
function searchCity (e) {
    e.preventDefault();
    if (!searchInput.value) {
        return
    }
    var search = searchInput.value.trim();
    cityFetch(search)

    // I THINK this is where I want to use the local storage function, inside the searchCity function
    // Because it is the "search" input that I want to save and I want to save it on the click that is activated 
    // by the event listener above...SO searchCity is where that info comes from. 
}

// function fetching city coordinates-> go to next function
function cityFetch(search) {
    console.log(search) // first console.log

    var city= "http://api.openweathermap.org/geo/1.0/direct?q=" + search + "&limit=5&appid=" + APIKey
    fetch(city)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data[0]); // CORRECT, it returns the NAME of the city
            // go to next function
            weatherFetch(data[0])
        });
}

//fetch weather using city into -> define city -> go to next function
    function weatherFetch(location) {
        var lat = location.lat;
        var lon = location.lon;
        console.log(location.lat);
        console.log(location.lon)

        var city = location.name;

        var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial";
        fetch(weatherUrl)  
        .then(function (response) {
            return response.json();
            // In my response, I only want TEMP, WIND (mph), and HUMIDITY 
            // How do I only return those values?
        })
        .then(function (data) {
            console.log(data.list);
            
            // for (var i = 0; i < data.list.length; i++) {
            //     console.log(data.list[i].main.temp)
            //     console.log(data.list[i].main.humidity)
            //     console.log(data.list[i].wind.speed)
            // }
            // // go to next function
            // Solving for 2 things: Current and Forecast = functions
        currentDisplay(data.list[0], city)
        
        //forecastDisplay(data.list) display text: 5day forecast...for loop array function displayCard
    }
        )};
    
    function currentDisplay(weather, city) {
        console.log(weather)
        var temp = weather.main.temp;
        var wind = weather.wind.speed;
        var humidity = weather.main.humidity;

        var card = document.createElement("div");
        card.setAttribute("class", "card")
        card.setAttribute("style", "width:18rem;")
        card.append(currentWeather);

        var cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body")
        card.append(cardBody);

        var cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title")

        var tempEl = document.createElement("p");
        tempEl.setAttribute("class", "card-text")

        var windEl = document.createElement("p");
        windEl.setAttribute("class", "card-text")

        var humidityEl = document.createElement("p");
        humidityEl.setAttribute("class", "card-text")

        cardTitle.textContent = city
        tempEl.textContent = "Temp: " + temp;

        cardBody.append(cardTitle, tempEl, windEl, humidityEl)
    }
    // Identify all ids from html
    // main container: #weatherApp (probably won't need to use this one)
    // search button id: #searchCity (to save past searches in local storage)
    // local storage container: #localStorage (Display city)
    // current weather container: #current (Display city, date, temp, wind(mph), humidity)
    // extended forecast container: #extendedForecast (Display city, date, temp, wind(mph), humidity)

