const api_key = "3e803e376ea726f2eb67a4d28a9e6567";

async function fetchWeather(city) {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error('City Not Found!');
        }
        const weatherData = response.json();
        // console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.log("Error:", error);
        return null;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    if (data) {
        weatherResult.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °С</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}</p>
            <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
        `
    } else {
        weatherResult.innerHTML = `<p>Could Not find the weather Information`;
    }
}

document.getElementById('weather-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const data = await fetchWeather(city);
    displayWeather(data);
})