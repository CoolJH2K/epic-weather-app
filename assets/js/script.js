// This calls the API, just update the url to have your key's name.
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

// Create variables for the current day and time
var currentDay = day.js().format("MMM D, YYYY");
$("#current-date").text(currentDay);

var currentTime = day.js().format("hh:mm:ss");
$("#current-date").text(currentTime);

// Write a funciton that locates a city's coordinates
function cityCoordinates() {
    
}

// Function for the coordinates of the predefined buttons
function predefinedButton() {
    $(".city-button").addEventListener(click,);
}

// Write a function calling for the location of the city when the Search button is pressed

// Write a function calling for a specific city