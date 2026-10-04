# Weather App

![Weather App Screenshot](Weather-App/screenshots/image.png)

A simple and intuitive weather application that provides current weather information for any city worldwide.

## Features

- **City Search**: Enter any city name to get current weather data
- **Current Temperature**: Displays temperature in Celsius
- **Weather Conditions**: Shows weather status with appropriate emoji icons (sunny ☀️, cloudy ☁️, rainy 🌧️, snowy ❄️, thunderstorm ⚡)
- **Detailed Information**:
  - 💧 Humidity percentage
  - 💨 Wind speed
  - ⬆️ Maximum temperature
  - ⬇️ Minimum temperature
- **Persistent Storage**: Remembers your last searched city using localStorage
- **Keyboard Support**: Press Enter to search for weather

## Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and layout
- **JavaScript (ES6+)** - Application logic and API integration
- **OpenWeatherMap API** - Weather data provider

## Getting Started

### Prerequisites

- A modern web browser
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd Weather-App
   ```

3. Open `Weather-App/script.js` and add your OpenWeatherMap API key:
   ```javascript
   const apiKey = 'your-api-key-here';
   ```

4. Open `index.html` in your browser

## Usage

1. Enter a city name in the input field
2. Click the search button (magnifier icon) or press Enter
3. View the current weather information for that city

## Project Structure

```
Weather-App/
├── index.html           # Main HTML file
├── README.md            # Project documentation
└── Weather-App/
    ├── script.js        # Application logic
    ├── styles.css       # Styling
    ├── icons/           # UI icons
    └── screenshots/     # Application screenshots
```

## API Reference

This app uses the [OpenWeatherMap API](https://openweathermap.org/current) to fetch weather data.

**Endpoint**: `https://api.openweathermap.org/data/2.5/weather`

**Parameters**:
- `q`: City name
- `units`: Measurement units (metric for Celsius)
- `appid`: Your API key

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
