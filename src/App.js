import React, { useState } from 'react';
import './style.css';

function App() {
  const [inputTemp, setInputTemp] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('celsius');
  const [convertedTemp, setConvertedTemp] = useState(null);

  const convertTemperature = () => {
    let result;
    const temperature = parseFloat(inputTemp);

    if (!isNaN(temperature)) {
      switch (selectedUnit) {
        case 'celsius':
          result = {
            fahrenheit: (temperature * 9) / 5 + 32,
            kelvin: temperature + 273.15,
          };
          break;
        case 'fahrenheit':
          result = {
            celsius: ((temperature - 32) * 5) / 9,
            kelvin: ((temperature - 32) * 5) / 9 + 273.15,
          };
          break;
        case 'kelvin':
          result = {
            celsius: temperature - 273.15,
            fahrenheit: (temperature - 273.15) * (9 / 5) + 32,
          };
          break;
        default:
          break;
      }

      setConvertedTemp(result);
    } else {
      setConvertedTemp('Lütfen geçerli bir sayı girin!');
    }
  };

  const handleInputChange = (e) => {
    setInputTemp(e.target.value);
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="title">Sıcaklık Dönüştürücü</h1>
      <div className="input-container">
        <input
          type="number"
          value={inputTemp}
          onChange={handleInputChange}
          placeholder="Sıcaklık Girin"
          className="input-field"
        />
        <select value={selectedUnit} onChange={handleUnitChange} className="select-field">
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <button onClick={convertTemperature} className="convert-btn">
          Dönüştür
        </button>
      </div>
      {convertedTemp !== null && (
        <div className="result-container">
          {typeof convertedTemp === 'object' ? (
            <div className="result">
              <p>Celsius: {convertedTemp.celsius && convertedTemp.celsius.toFixed(2)}</p>
              <p>Fahrenheit: {convertedTemp.fahrenheit && convertedTemp.fahrenheit.toFixed(2)}</p>
              <p>Kelvin: {convertedTemp.kelvin && convertedTemp.kelvin.toFixed(2)}</p>
            </div>
          ) : (
            <p className="error">{convertedTemp}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
