import React, { useEffect, useRef, useState } from 'react';
import Cocktails from './Cocktails';

export default function App() {
  const { initialCocktails, setInitialCocktails } = useRef(false);
  const { cocktailData, setCocktailData } = useState([]);
  const { selectedAlcohol, setSelectedAlcohol } = useState('');
  const alcohols = ['Gin', 'Tequila', 'Rum', 'Whiskey', 'Vodka'];

  function handleOnChange(e) {
    console.log('e', e, e.target.value);
    setSelectedAlcohol(e.target.value);
    // invoke axios request, set cocktailData
  }
  return (

    <div>
      <div id="welcome">Welcome!</div>
      <div id="getstarted">
        Lets get started finding a cocktail! Start by picking a
        base from the drop down below

      </div>
      <select name="alcoholList" onChange={(e) => handleOnChange(e)}>
        {alcohols.map((alcohol) => (
          <option value={alcohol}>{alcohol}</option>
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
