import React, { useRef, useState } from 'react';
import Cocktails from './Cocktails';

export default function App() {
  const { initialCocktails, setInitialCocktails } = useRef(false);
  const { cocktailData, setCocktailData } = useState([]);
  const { selectedAlcohol, setSelectedAlcohol } = useState('');
  const alcohols = ['Gin', 'Tequila', 'Rum', 'Whiskey', 'Vodka'];
  return (
    <div>
      <div id="welcome">Welcome!</div>
      <div id="getstarted">
        Lets get started finding a cocktail! Start by picking a
        base from the drop down below

      </div>
      <select name="alcoholList" value={selectedAlcohol}>
        {alcohols.map((alcohol, index) => (
          <option value="option1">{alcohol}</option>
        ))}
      </select>
      <div id="cocktails">
        {initialCocktails ? cocktailData.map((cocktail) => (
          <div>
            <Cocktails cocktail={cocktail} />
          </div>
        ))
          : null}
      </div>
    </div>
  );
}
