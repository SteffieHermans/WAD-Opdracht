import React, { Component } from 'react';
import Recept from './Recept.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="main-container">
        <h1>Mijn Receptenboek</h1>
        <Recept title="Chocolate Orange Shortbread" description="A zesty chocolate shortbread that really gets your mouth watering. Perfect with a cup of tea." ingredients={["150 g unsalted butter , at room temperature", "200 g plain flour", "50 g golden caster sugar , plus extra to sprinkle", "1 orange", "50 g quality dark chocolate , (70%)"]} steps={["Preheat the oven to 190ºC/375ºF/gas 5. Grease a 20cm square baking tin and line with greaseproof paper. In a bowl, mix together the butter, flour, sugar and the finely grated zest of half the orange by rubbing the mixture between your thumbs and fingertips. Squash and pat into dough – don’t knead it – then push into the lined tin in a 1cm-thick layer. Prick all over with a fork, then bake for 20 minutes, or until lightly golden. Remove, sprinkle over a little extra sugar while it’s still warm, then leave to cool.", "Meanwhile, melt the chocolate in a heatproof bowl over a pan of gently simmering water, then remove. Cut the shortbread into 12 finger portions, then transfer to a wire cooling rack. Drizzle with the chocolate, then finely grate over the remaining orange zest. Cut up the orange, and serve on the side!"]} notes="Geen opmerkingen" source="https://www.jamieoliver.com/recipes/chocolate-recipes/chocolate-orange-shortbread/"/>
      </div>
    );
  }
}

export default App;
