import React from 'react';
import axios from 'axios';

export default class Cocktails extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // alochol: this.props.selectedAlcohol,
    };
  }

  // console.log('props', props)
  // getCocktails() {
  //   axios.get('https://the-cocktail-db.p.rapidapi.com/filter.php');
  // }

  render() {
    return (
      <div>
        hi
      </div>
    );
  }
}
