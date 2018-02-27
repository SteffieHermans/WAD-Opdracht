import React, { Component } from 'react';

class Recept extends Component {
    
    render() {
      return (
        <article class="recipe">
            <h2>{this.props.title}</h2>
            <section>
                <h3>Beschrijving</h3>
                <p>{this.props.description}</p>
            </section>
            <section>
                <h3>Ingredienten</h3>
                <ul>
                    {this.props.ingredients.map(ingredient => {
                        return <li class="ingredient">{ingredient}</li>;
                    })}
                </ul>
            </section>
            <section>
                <h3>Methode</h3>
                <ol>
                    {this.props.steps.map(step => {
                        return <li class="step">{step}</li>;
                    })}
                </ol>
            </section>
            <section>
                <h3>Opmerkingen</h3>
                <p>{this.props.notes}</p>
            </section>
            <section>
                <h3>Bron</h3>
                <p>{this.props.source}</p>
            </section>
        </article>
        
      );
    }
}

export default Recept;