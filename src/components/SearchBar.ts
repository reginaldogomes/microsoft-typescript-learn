// src/components/SearchBar.ts
export const createSearchBar = (
  onSearch: (city: string) => void,
): HTMLDivElement => {
  const container = document.createElement('div');
  const input = document.createElement('input');
  const button = document.createElement('button');

  input.type = 'text';
  input.placeholder = 'Digite o nome da cidade';
  button.textContent = 'Buscar';

  container.appendChild(input);
  container.appendChild(button);

  button.addEventListener('click', () => {
    const city = input.value.trim();
    if (city) {
      onSearch(city);
    }
  });

  return container;
};
