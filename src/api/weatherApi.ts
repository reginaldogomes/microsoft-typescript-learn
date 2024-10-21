// src/api/weatherApi.ts
export interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

const API_KEY = '90f1216f492341bf6bdbd7c5994e71a5';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (
  city: string,
): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }

    const data = await response.json();

    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
