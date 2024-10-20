// src/components/WeatherCard.ts
import { WeatherData } from '../api/weatherApi';

export const createWeatherCard = (weather: WeatherData): HTMLDivElement => {
  const container = document.createElement('div');
  const city = document.createElement('h2');
  const temp = document.createElement('p');
  const desc = document.createElement('p');
  const icon = document.createElement('img');

  city.textContent = weather.city;
  temp.textContent = `Temperatura: ${weather.temperature}°C`;
  desc.textContent = weather.description;
  icon.src = `http://openweathermap.org/img/wn/${weather.icon}.png`;

  container.appendChild(city);
  container.appendChild(temp);
  container.appendChild(desc);
  container.appendChild(icon);

  return container;
};
