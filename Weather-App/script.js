const apiKey = '979be1a22b1f2dd833f21079b3a21c11';

const weatherIcons = {
  sunny: '☀️', 
  cloudy: '☁️', 
  rainy: '🌧️', 
  snowy: '❄️', 
  thunderstorm: '⚡',
}

const weatherIcon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temperature');
const cityName = document.querySelector('.city-name'); 
const desc = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const tempMax = document.querySelector('.temp-max');
const tempMin = document.querySelector('.temp-min');
const inputCity = document.querySelector('.city-name-input'); 
const getWeatherBtn = document.querySelector('.get-weather-btn');

const getWeather = async (city) => {
  try {
    const res = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    const data = await res.json();
    return data
  } catch (err) {
    console.log(err)
  }
}

const showWeather = async (city) => { 
  try {
    const data = await getWeather(city);

    if (data.weather[0].main === 'Clear') {
      weatherIcon.textContent = weatherIcons.sunny
    } else if (data.weather[0].main === 'Clouds') {
      weatherIcon.textContent = weatherIcons.cloudy
    } else if (data.weather[0].main === 'Rain') {
      weatherIcon.textContent = weatherIcons.rainy
    } else if (data.weather[0].main === 'Snow') {
      weatherIcon.textContent = weatherIcons.snowy
    } else if (data.weather[0].main === 'Thunderstorm') {
      weatherIcon.textContent = weatherIcons.thunderstorm
    } else {
      weatherIcon.textContent = weatherIcons.sunny
    }

    temp.textContent = `${Math.floor(data.main.temp)}°C`
    cityName.textContent = data.name;
    desc.textContent = data.weather[0].main;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${Math.floor(data.wind.speed)} km/h`;
    tempMax.textContent = `${Math.floor(data.main.temp_max)}°C`;
    tempMin.textContent = `${Math.floor(data.main.temp_min)}°C`;
  } catch (err) {
    alert('Something went wrong, please try again later');
    console.log(err)
  }
}

const reset = () => {
  weatherIcon.textContent = ''
  temp.textContent = ``
  cityName.textContent = '';
  desc.textContent = '';
  humidity.textContent = ``;
  windSpeed.textContent = ``;
  tempMax.textContent = ``;
  tempMin.textContent = ``;
}

getWeatherBtn.addEventListener('click', () => {
  if (inputCity.value !== '') {
    showWeather(inputCity.value);
  } else {
    reset()
    cityName.textContent = 'Uncorrect Value';
  }
})