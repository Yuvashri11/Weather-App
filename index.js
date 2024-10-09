const weather=document.getElementById("weather")
function getWeather() {
    const location = document.getElementById("location").value;  // Get the user input
    if (!location) {
        alert("Please enter a location!");
        return;
    }
    let url = `https://api.weatherapi.com/v1/current.json?key=95084243e35845af8ad160925240510&q=${location}`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                weather.textContent = `Error: ${data.error.message}`;
            } else {
                weather.textContent = `Temperature in ${data.location.name} is ${data.current.temp_c} °C`;
            }
        })
        .catch((error) => {
            weather.textContent = "Error fetching weather data!";
            console.error(error);
        });
}

function clicked() {
    alert("You Clicked me!");
}










