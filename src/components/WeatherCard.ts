// src/components/WeatherCard.ts
import { WeatherData } from '../api/weatherApi';

export const createWeatherCard = (weather: WeatherData): HTMLDivElement => {
  const container = document.createElement('div');
  container.classList.add('weather-card'); // Adicionando uma classe para estilização

  const city = document.createElement('h2');
  const temp = document.createElement('p');
  const desc = document.createElement('p');
  const icon = document.createElement('img');

  // Acessando propriedades do WeatherData
  city.textContent = weather.city || 'Cidade desconhecida'; // Adicionando um valor padrão
  temp.textContent = `Temperatura: ${weather.temperature !== undefined ? weather.temperature : 'N/A'}°C`;
  desc.textContent = weather.description || 'Descrição não disponível'; // Adicionando um valor padrão
  icon.src = `http://openweathermap.org/img/wn/${weather.icon}.png`;

  // Anexando os elementos ao container
  container.appendChild(city);
  container.appendChild(temp);
  container.appendChild(desc);
  container.appendChild(icon);

  return container;
};
