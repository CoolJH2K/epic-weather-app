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

// Write a funciton that lets the search bar know where a city's coordinates are

// Write a function calling for the location of the cit when the Search button is pressed

// Write a function calling for a specific city