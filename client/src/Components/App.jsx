import React, { useRef, useState } from 'react';
import Cocktails from './Cocktails';

export default function App() {
  const { initialCocktails, setInitialCocktails } = useRef(false);
  const { cocktailData, setCocktailData } = useState([]);
  return (
    <div>
      <div id="welcome">Welcome!</div>
      <div id="getstarted">
        Lets get started finding a cocktail! Start by picking a
        base from the drop down below

      </div>
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
