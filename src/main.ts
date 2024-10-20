// src/main.ts
import { WeatherController } from './controllers/WeatherController';

const app = document.querySelector<HTMLDivElement>('#app')!;
const weatherController = new WeatherController(app);

weatherController.initialize();
