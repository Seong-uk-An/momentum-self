const API_KEY = "e3fc4f0b1ff9b581459527147568ed16"

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(weatherUrl).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `,   ${data.weather[0].main},   ${data.main.temp}°C`
    })
}

function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)