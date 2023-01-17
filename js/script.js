
var cityName; 
var lat;
var lon;
var name;
var cardContainer = document.getElementById('card-container')
var TitleBtn = document.querySelector('#mainPage');


// City names
let london = "London";
let tehran = "Tehran";
let chicago = "Chicago";
let madrid = "Madrid";
let sydney = "Sydney";
var geoCodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=67ee7ea9afb0c0bdbb00b6327f4bd08d`;
var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=67ee7ea9afb0c0bdbb00b6327f4bd08d`;

function init() {
    displayLondonGeoCode();
    displayTehranGeoCode();
    displayMadridGeoCode();
    displayChicagoGeoCode();
    displaySydneyGeoCode();
}



function callGeoCodingApi() {

    fetch(geoCodeApi).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
        console.log("Called geo coding api here:")
        console.log(data);
        displayGeoCode(data)
            
        });
    } else { 
        alert('Error: ' + response.statusText);
    }
    });


}

function callFiveDayWeatherApi(weatherEl, cardBodyDivEl) {
    fetch(fiveDayApi).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            console.log("Called the five Day API here:")
            console.log(data);
            displayWeatherInfo(data, weatherEl, cardBodyDivEl);
                
            });
        } else { 
            alert('Error: ' + response.statusText);
        }
    });
    
}

function displayGeoCode (coord) {
    console.log('coord right now is:');
    console.log(coord);
        var cardBodyDivEl = document.createElement("div");
        var cardTitleEl = document.createElement("h5");
        var cardLatEl = document.createElement("p");
        var weatherEl = document.createElement("p");

        var cardLongEl = document.createElement("p");
        var colDivEl = document.createElement("div");
        var cardDivEl = document.createElement("div");
        var cardImg = document.createElement("img");

        var btnEl = document.createElement("button");
        var iconEl = document.createElement("i");
        var linkEl = document.createElement("a")
    
        colDivEl.setAttribute("class", "col");
        cardDivEl.setAttribute("class", "card border border-0");
        cardBodyDivEl.setAttribute("class", "card-body");
        cardLatEl.setAttribute("class", "card-lat");
        cardLongEl.setAttribute("class", "card-long");
        cardTitleEl.setAttribute("class", "card-title");
        cardImg.setAttribute("class", "img-fluid")
        console.log(coord[0]);
        cardTitleEl.textContent = coord[0].name;
        
        // Get the lat and lon coordinates, display them and also apply them to api
        cardLatEl.textContent = "Latitude:" + coord[0].lat;
        lat = coord[0].lat;
        cardLongEl.textContent = "Longitude:" + coord[0].lon;
        lon = coord[0].lon;
        fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=67ee7ea9afb0c0bdbb00b6327f4bd08d`;
        console.log(fiveDayApi);
        
        if (coord[0].name === "London") { 
            callFiveDayWeatherApi(weatherEl, cardBodyDivEl);
            cardImg.src = "../assets/images/London.jpg";
        } else if (coord[0].name === "Tehran") { 
            callFiveDayWeatherApi(weatherEl, cardBodyDivEl);
            cardImg.src = "../images/Tehran.jpg";
        } else if (coord[0].name === "Madrid") {
            callFiveDayWeatherApi(weatherEl, cardBodyDivEl);
            cardImg.src = "../images/Madrid.jpg";
        } else if (coord[0].name === "Chicago") {
            callFiveDayWeatherApi(weatherEl, cardBodyDivEl);
            cardImg.src = "../images/Chicago.jpg";
        } else if (coord[0].name === "Sydney") {
            callFiveDayWeatherApi(weatherEl, cardBodyDivEl);
            cardImg.src = "../../images/1722072.jpg";

        }

     
        //Append all elements
        cardContainer.appendChild(colDivEl)
        colDivEl.appendChild(cardDivEl)
        cardDivEl.appendChild(linkEl)
        linkEl.appendChild(cardImg)
        cardDivEl.appendChild(cardBodyDivEl)
        cardBodyDivEl.appendChild(cardTitleEl)
        cardBodyDivEl.appendChild(cardLatEl)
        cardBodyDivEl.appendChild(cardLongEl)
        cardBodyDivEl.appendChild(btnEl)
        btnEl.appendChild(iconEl)

}

function displayWeatherInfo(dataPassedIn, weatherEl, cardBodyDivEl) {
    weatherEl.setAttribute("class", "card-weather");
    weatherEl.textContent = "Temperature: " +dataPassedIn.list[0].main.temp + "Kelvin\r\n" + "Weather conditions: " + "\r\n" +dataPassedIn.list[0].weather[0].description + "\n" + "Humidity: " + dataPassedIn.list[0].main.humidity + ' ``````````````````````````````````````' + "   Wind speed:   " + dataPassedIn.list[0].wind.speed
    cardBodyDivEl.appendChild(weatherEl);

    return;

}

function displayLondonGeoCode (coord) {
    geoCodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${london}&appid=67ee7ea9afb0c0bdbb00b6327f4bd08d`;
    callGeoCodingApi(coord);



}

function displayTehranGeoCode(coord) {
    geoCodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${tehran}&appid=67ee7ea9afb0c0bdbb00b6327f4bd08d`;
    callGeoCodingApi(coord);

}

function displayMadridGeoCode(coord) {
    geoCodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${madrid}&appid=67ee7ea9afb0c0bdbb00b6327f4bd08d`;
    callGeoCodingApi(coord);
}

function displayChicagoGeoCode(coord) {
    geoCodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${chicago}&appid=67ee7ea9afb0c0bdbb00b6327f4bd08d`;
    callGeoCodingApi(coord);
}

function displaySydneyGeoCode(coord) {
    geoCodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${sydney}&appid=67ee7ea9afb0c0bdbb00b6327f4bd08d`;
    callGeoCodingApi(coord);
}


TitleBtn.addEventListener('click', function () {
    document.location = ("../index.html")
});

init();