import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  setCity,
  error,
  loading,
  fetchCitySuggestions,
  citySuggestions,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (!inputValue) return;

    const timer = setTimeout(() => {
      fetchCitySuggestions(inputValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="md:min-w-124 relative flex items-center justify-center gap-2"
      >
        <label className="flex flex-col w-full">
          <input
            type="text"
            required
            placeholder="Digite a cidade"
            className="rounded p-2 text-2xl w-full bg-blue-200/60 shadow-xl backdrop-blur-md"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setShowSuggestions(true);
            }}
          />
          {citySuggestions.length > 0 && showSuggestions && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-10">
              {citySuggestions.map((city, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                  onClick={() => {
                    setShowSuggestions(false);
                    setInputValue(`${city.name}, ${city.country}`);
                  }}
                >
                  {city.name}, {city.state ? city.state + ", " : ""}
                  {city.country}
                </li>
              ))}
            </ul>
          )}
        </label>
        <button
          type="submit"
          className="rounded-full p-2.5 cursor-pointer bg-blue-200/60 shadow-xl backdrop-blur-md"
          onClick={() => setShowSuggestions(false)}
        >
          {" "}
          <FaSearch className="text-3xl text-gray-800" />{" "}
        </button>
      </form>
      <div className="rounded-xl px-6 py-2">
        {loading ? <p className="text-xl">Carregando...</p> : error ? <p className="text-xl">{error}</p> : ""}
      </div>
      
    </div>
  );
};

export default SearchBar;
