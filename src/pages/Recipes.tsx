import Recipe, { RecipeParams } from "../components/Resepti";

const RecipePage = () => {
    const recipes: RecipeParams[] = [
        {
            name: "Juustokäntty",
            ingredients: ["Käntty", "Juustoa"],
            steps: [
                "Leikkaa käntty kahtia",
                "Laita juusto käntyn väliin",
                "Nuketa käntty",
            ],
        },
        {
            name: "solakatti",
            ingredients: ["1.5L Solapullo", "Mehukattia"],
            steps: [
                "Juo pois 0.5L solaa",
                "Täytä mehukatilla",
                "Nauti (tai älä)",
            ],
        },
    ];
    return (
        <div>
            <h2>Reseptit</h2>

            {recipes.map((props) => (
                <Recipe {...props} />
            ))}
        </div>
    );
};

export default RecipePage;
