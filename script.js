const apiKey = "69692b9767d20713b0f05002cc2bf906"; // Replace with your API key

async function getWeather() {
    const city = "Bengaluru";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const weatherHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;

        document.getElementById("weatherResult").innerHTML = weatherHTML;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data";
    }
}

// Load automatically when page opens
window.onload = getWeather;