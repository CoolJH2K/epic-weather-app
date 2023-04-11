// Declare variable for the search bar
var search = document.querySelector("#search-bar");

// Call the API key
async function fetchKey() {
    const url = "https://yorkieportunus.herokuapp.com/store/Janna's Key"
    const response = await fetch(url);
    const key = await response.json();
        return key;
    }
    // Call this wherever you need your key.
    fetchKey().then((key) => {
        secretKey = key.apiKey;
        console.log(secretKey);
    });

// Variables for the current day and time
var currentDay = day.js().format("MMM D, YYYY");
$("#current-date").text(currentDay);

var currentTime = day.js().format("hh:mm:ss");
$("#current-date").text(currentTime);

// Function for collecting the needed info about a particular city

// Function for the coordinates of the predefined buttons
function predefinedButton() {
    $(".city-button").addEventListener("click", function() {
        
    });
}

// Functions for the search bar
function handleFormSubmit(event) {
    event.preventDefault();
    var search = search.value.trim();
    fetchData(search);
    search.value = "";
}

function fetchData(searchValue) {
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=search&limit=5&appid=c5a5e3e368e07a9374e3e5a74d4241a6"
}

// Write a function calling for the location of the city when the Search button is pressed

// Write a function calling for a specific city