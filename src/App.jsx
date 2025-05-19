import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherBar from "./components/WeatherBar";
import Footer from "./components/Footer";

const apiKey = "e583edd2e8a05d488ee3c74b8e04f3c2";

function App() {
  const [city, setCity] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`);
      
        const data = await response.json();

        if(data.cod !== 200) {
          setError("Erro ao buscar dados. Verifique se o nome da cidade esta correto.");
          setWeatherData(null);
        } else{
          setError(null);
          setWeatherData(data);
        }
      } catch (err) {
        setError("Erro de conexão");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const fetchCitySuggestions = async (query) => {
    if(!query) {
      setCitySuggestions([]);
      return;
    }

    try{
const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query + ",BR")}&limit=5&appid=${apiKey}`);
      const data = await response.json();
      
      const filteredData = data.filter(city => city.state && city.name && city.country === "BR");
      setCitySuggestions(filteredData);
    } catch {
      setCitySuggestions([]);
    }
  }

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <SearchBar setCity={setCity} error={error} loading={loading} fetchCitySuggestions={fetchCitySuggestions} citySuggestions={citySuggestions}/>
      <WeatherBar weatherData={weatherData} />
      < Footer/>
    </div>
  );
}

export default App;
