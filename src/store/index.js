import Recipe from "../models/Recipe";
import Data from "../models/Data";
import uniqid from "uniqid";

class Store {
    recipes = {};
    data = {};

    constructor() {
        this.addRecipe(new Recipe (
            "Champignonpasta met Rucola",
            "Altijd-goed-pasta met saus van witte wijn, créme fraîche en gebakken kastanjechampignons.",
            4,
            1.5,
            [
                "300 g spaghetti",
                "400 g champignons",
                "1 ui",
                "1 el traditionele olijfolie",
                "2 tenen knoflook",
                "50ml droge witte wijn",
                "200 ml créme fraîche",
                "75 g rucola"
            ],
            [
                "Kook de spaghetti beetgaar volgens de aanwijzingen op de verpakking.",
                "Maak ondertussen de champignons schoon met keukenpapier en snijd ze in stukken. Snipper de ui. Verhit in een ruime koekenpan de olie en fruit de ui 5 min. Bak de champignons al omscheppend 5 min. mee. Pers de knoflook, voeg toe aan de ui en champignons en bak nog 1 min. Roer de wijn en de crème fraîche erdoor en houd de saus op laag vuur warm. Breng op smaak met peper en zout.",
                "Giet de spaghetti af en voeg toe aan de champignonsaus. Schep de rucola erdoor en serveer direct."
            ],
            "Kindertip: Vervang de witte wijn door appelsap. Rucola zou ook vervangen kunnen worden door verse spinazie.", "allerhande (website)"
        ));
        this.resetData();
    }

    addRecipe = recipe => {
        const id = uniqid();
        this.recipes[id] = recipe;
        return id;
    }

    resetData = () => {
        this.data = new Data();
    }

    deleteRecipe = id => {
        delete this.recipes[id];
    }
}

const store = new Store();
window.store = store;
export default store;