import React from 'react';
import axios from 'axios';

export default class Cocktails extends React.Component {
  constructor() {
    super();
    this.state = {
      alochol: '',
    };
  }

  getCocktails() {
    axios.get('https://the-cocktail-db.p.rapidapi.com/filter.php');
  }

  render() {
    return (
      <div>
        hi
      </div>
    );
  }
}
