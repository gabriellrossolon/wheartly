# 🌤️ Wheaterly

Wheaterly é uma aplicação web desenvolvida em React que permite ao usuário buscar informações meteorológicas de forma rápida e intuitiva. Basta digitar o nome de uma cidade e obter os dados do clima atual, incluindo temperatura, sensação térmica, umidade e mais.

👉 Acesse o projeto em produção: [https://wheaterly.vercel.app](https://wheaterly.vercel.app)

---

## 🚀 Funcionalidades

- 🔎 Autocomplete de cidades com sugestões em tempo real
- 🌎 Filtro para mostrar apenas cidades brasileiras
- ☀️ Consulta ao clima atual com dados da [OpenWeatherMap API](https://openweathermap.org/)
- 📍 Exibição do estado e país da cidade selecionada
- 🔄 Feedback de carregamento e mensagens de erro tratadas

---

## 🧠 Tecnologias e Aprendizados

Durante o desenvolvimento do Wheaterly, foram praticados e consolidados os seguintes conceitos:

- **React (Hooks)**: uso de `useState`, `useEffect` e composição de componentes
- **Consumo de APIs**: integração com a OpenWeatherMap para dados de clima e geolocalização
- **Autocomplete + debounce**: lógica de sugestões com `setTimeout` para evitar requisições excessivas
- **Filtragem de dados**: apenas cidades válidas no Brasil são sugeridas ao usuário
- **Responsividade e UX**: interface amigável com feedbacks de loading e erro

---

## 📸 Prints do Projeto
![screencapture-wheaterly-vercel-app-2025-05-19-16_27_31](https://github.com/user-attachments/assets/a4ba9cf8-3f83-49cf-8087-3f846b00378c)


---

## 📦 API Utilizada

- **OpenWeatherMap**:
  - [Weather API](https://openweathermap.org/current) — dados meteorológicos
  - [Geocoding API](https://openweathermap.org/api/geocoding-api) — autocomplete com base no nome da cidade

---

## ✨ Créditos

Projeto desenvolvido para treinar integração com APIs externas, manipulação de estados em React e boas práticas de UX com autocomplete e feedback visual.

---

