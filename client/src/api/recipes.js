class Api {
    url = `http://localhost:4000/recipes`;
  
    getAll = () => {
      return fetch(`${this.url}`).then(r => r.json());
    };
  
    create = recipe => {
        let {title, description, servings, pricePerServing, ingredients, steps, notes, source} = recipe;
        ingredients = Array.from(ingredients);
        steps = Array.from(steps);
        const body = {title, description, servings, pricePerServing, ingredients, steps, notes, source};
      return fetch(`${this.url}/add`, this.getOptions(`post`, body)).then(r =>
        r.json()
      );
    };

    update = recipe => {
      const {title, description, servings, pricePerServing, ingredients, steps, notes, source} = recipe;
      const body = {title, description, servings, pricePerServing, ingredients, steps, notes, source};
      return fetch(`${this.url}/edit/${recipe.id}`, this.getOptions(`put`, body))
        .then(r => r.json())
        .catch(err => console.error(err));
    };
  
    remove = recipe => {
      return fetch(`${this.url}/${recipe.id}`, this.getOptions(`delete`))
        .then(r => r.json())
        .catch(err => console.error(err));
    };
  
    getOptions = (method, body = null) => {
      const options = {
        method: method.toUpperCase(),
        headers: {
          "content-type": `application/json`
        }
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      return options;
    };
  }
  export default Api;