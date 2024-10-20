// src/controllers/WeatherController.ts
import { fetchWeather } from '../api/weatherApi';
import { createWeatherCard } from '../components/WeatherCard';
import { createSearchBar } from '../components/SearchBar';

export class WeatherController {
  private app: HTMLDivElement;

  constructor(appElement: HTMLDivElement) {
    this.app = appElement;
  }

  initialize() {
    const searchBar = createSearchBar(this.handleSearch.bind(this));
    this.app.appendChild(searchBar);
  }

  private async handleSearch(city: string) {
    this.clearResults();

    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = 'Carregando...';
    this.app.appendChild(loadingMessage);

    const weather = await fetchWeather(city);
    loadingMessage.remove();

    if (weather) {
      const weatherCard = createWeatherCard(weather);
      this.app.appendChild(weatherCard);
    } else {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Erro ao buscar os dados. Tente novamente.';
      this.app.appendChild(errorMessage);
    }
  }

  private clearResults() {
    this.app.innerHTML = '';
  }
}
