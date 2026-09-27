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

const getWeather = async (city) => {
  try {
    const res = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    const data = await res.json();
    return console.log(data);
  } catch (err) {
    console.log(err)
  }
}
