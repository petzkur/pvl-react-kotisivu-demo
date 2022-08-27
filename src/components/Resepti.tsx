import "./resepti.css";

export type RecipeParams = {
    name: string;
    ingredients: string[];
    steps: string[];
};

const Recipe = ({ name, ingredients, steps }: RecipeParams) => {
    return (
        <div className="recipe">
            <h3>{name}</h3>
            <h4>Ainekset</h4>
            <ul>
                {ingredients.map((x) => (
                    <li>{x}</li>
                ))}
            </ul>
            <ol>
                {steps.map((x) => (
                    <li>{x}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
