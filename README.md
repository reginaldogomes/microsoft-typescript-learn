# Consumidor de API com TypeScript

![TypeScript](https://www.typescriptlang.org/images/logo.svg) <!-- Logo do TypeScript, substitua conforme necessário -->

## Descrição

Este projeto é um **Consumidor de API** desenvolvido como parte do curso **"Criar Aplicativos JavaScript Usando TypeScript"** da Microsoft Learn. O objetivo da aplicação é consumir a **API de clima OpenWeather**, permitindo que os usuários busquem dados meteorológicos em tempo real. A aplicação exibe as informações de forma clara e intuitiva, implementando funcionalidades como busca dinâmica, paginação e estados de loading.

### Tecnologias Utilizadas

- **TypeScript**: Para garantir uma tipagem robusta e reduzir erros de runtime.
- **Vite**: Um bundler de próxima geração que proporciona um desenvolvimento rápido e eficiente.
- **SASS**: Para o estilo da aplicação, permitindo a criação de estilos modularizados e manuteníveis.
- **HTML**: Para a estruturação da interface da aplicação.
- **CSS**: Para o estilo básico e layout da aplicação.
- **ESLint**: Para garantir a qualidade do código e seguir as melhores práticas de desenvolvimento.
- **Prettier**: Para formatar o código automaticamente, mantendo um estilo consistente.

## Estrutura do Projeto

A estrutura do projeto foi organizada seguindo os princípios de Clean Code e SOLID, facilitando a manutenção e a escalabilidade. Veja como o projeto está organizado:

```
├── src
│   ├── components       # Componentes reutilizáveis
│   ├── services         # Serviços para consumo de API
│   ├── utils            # Funções utilitárias
│   ├── styles           # Estilos em SASS
│   └── index.ts         # Ponto de entrada da aplicação
├── public               # Arquivos públicos
├── .eslintrc.js         # Configuração do ESLint
├── .prettierrc          # Configuração do Prettier
├── package.json         # Dependências do projeto
└── README.md            # Este arquivo
```

## Funcionalidades

- **Busca Dinâmica**: Os usuários podem buscar informações meteorológicas da API OpenWeather em tempo real.
- **Paginação**: Resultados podem ser paginados para facilitar a navegação.
- **Estados de Loading**: A interface apresenta feedback visual enquanto os dados estão sendo carregados.
- **Tratamento de Erros**: A aplicação lida com possíveis falhas ao consumir a API, informando o usuário de forma adequada.

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
   cd seu_repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute a aplicação:**

   ```bash
   npm run dev
   ```

4. **Abra o navegador e acesse:**

   ```
   http://localhost:3000
   ```

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para abrir uma issue ou um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para perguntas ou sugestões, entre em contato:

- **Reginaldo Gomes** - contato@reginaldogomes.dev.br
