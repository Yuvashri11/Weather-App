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
                weather.innerHTML=`
                    <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
                    <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
                    <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                    <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.current.wind_kph} km/h</p>
                    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" />
                `;
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










