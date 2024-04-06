import React, { useState } from 'react';
import './App.css';

function App() {
  const [colorName, setColorName] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleChange = (e) => {
    setColorName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const colorValue = colorNameToHex(colorName);
    if (colorValue) {
      setBoxes([...boxes, colorValue]);
      setColorName('');
    } else {
      alert('Por favor, ingrese un nombre de color válido.');
    }
  };

  // Función para convertir el nombre del color a su valor hexadecimal
  const colorNameToHex = (colorName) => {
    const colors = {
      rojo: '#FF0000',
      azul: '#0000FF',
      verde: '#00FF00',
      negro:'#000000',
      gris:'#454545',
      amarillo:	'#FFFF00',
      lima:	'#00FF00',
      fucsia:	'#FF00FF',
      purpura:	'#800080',
      marron: '#6F4E37' };

    return colors[colorName.toLowerCase()];
  };

  return (
    <div className="App">
      <h1>Generador de cajas</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input type="text" value={colorName} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <div className="box-container">
        {boxes.map((boxColor, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: boxColor }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;