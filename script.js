let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");
let cont = document.getElementById('container');

check.addEventListener("click", () => {
    let key = `bd4ea33ecf905116d12af172e008dbae`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + "')";

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = `tempicons/storm.svg`;
                cont.style.backgroundImage = "url(https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            } else if (items.id < 350) {
                tempIcon.src = `tempicons/drizzle.svg`;
                cont.style.backgroundImage = "url(https://images.pexels.com/photos/5538274/pexels-photo-5538274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            } else if (items.id < 550) {
                tempIcon.src = `tempicons/snow.svg`;
                cont.style.backgroundImage = "url(https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            } else if (items.id < 650) {
                tempIcon.src = `tempicons/rain.svg`;
                cont.style.backgroundImage = "url(https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            } else if (items.id < 800) {
                tempIcon.src = `tempicons/atmosphere.svg`;
                cont.style.backgroundImage = "url(https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            } else if (items.id === 800) {
                tempIcon.src = `tempicons/sun.svg`;
                cont.style.backgroundImage = "url(https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            } else if (items.id > 800) {
                tempIcon.src = `tempicons/clouds.svg`;
                cont.style.backgroundImage = "url(https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;

        humidity.innerText = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Latitude ${data.coord.lon}`;

    })
    country.value = "";
    city.value = "";
})
