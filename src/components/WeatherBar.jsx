const WeatherBar = ({ weatherData }) => {
  const containerClass = "";
  // min-h-[280px] = altura mínima para ocupar espaço (ajuste conforme precisar)

  if (!weatherData)
    return (
      <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-2xl px-8 py-4 w-full max-w-md mx-auto min-h-[280px]">
        {/* Espaço vazio para manter o tamanho */}
      </div>
    );

  const { name, main, weather, sys } = weatherData;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-2xl bg-blue-200/60 px-8 py-4 shadow-xl backdrop-blur-md w-full max-w-md mx-auto min-h-[280px]">
      <h2 className="text-2xl font-bold text-blue-900">{name + " - " + sys.country}</h2>
      <div className="bg-blue-400 rounded-full">
        <img src={iconUrl} alt={weather[0].description} className="w-24 h-24" />
      </div>
      <div className="grid grid-cols-1 gap-2 text-center text-blue-800">
        <p className="text-lg">
          🌡️ <span className="font-medium">Temperatura:</span> {main.temp}°C
        </p>
        <p className="text-lg capitalize">
          🌥️ <span className="font-medium">Tempo:</span>{" "}
          {weather[0].description}
        </p>
        <p className="text-lg">
          🤗 <span className="font-medium">Sensação:</span> {main.feels_like}°C
        </p>
        <p className="text-lg">
          💧 <span className="font-medium">Umidade:</span> {main.humidity}%
        </p>
      </div>
    </div>
  );
};

export default WeatherBar;
