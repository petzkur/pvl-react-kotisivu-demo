import Recipe from "../components/recipe/Recipe";
import { recipes } from "../data/recipes";
import "./recipes.css";

const RecipePage = () => {
    return (
        <div>
            <h2>Reseptit</h2>
            <div className="recipe-container">
                {recipes.map((props) => (
                    <Recipe {...props} />
                ))}
            </div>
        </div>
    );
};

export default RecipePage;
