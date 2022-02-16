import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Cocktails from './Cocktails';

export default function App() {
  const [initialCocktails, setInitialCocktails] = useState(false);
  const [cocktailData, setCocktailData] = useState([]);
  const [selectedAlcohol, setSelectedAlcohol] = useState('');
  const alcohols = ['Gin', 'Tequila', 'Rum', 'Whiskey', 'Vodka'];
  const options = {
    method: 'GET',
    url: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
    // params: { i: selectedAlcohol },
    // headers: {
    //   'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    //   'x-rapidapi-key': '19969743d6msh69c08153876db50p1ed1a5jsnd40e09e23de7',
    // },
  };

  useEffect(() => {
    console.log('useEffect');
    if (selectedAlcohol !== '') {
      console.log('made it inside');
      axios.request(options).then((response) => {
        console.log('response', response.data);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [selectedAlcohol]);

  function handleOnChange(e) {
    console.log('e', e, e.target.value);
    setSelectedAlcohol(e.target.value);
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
