import HomePage from "./Home";
import PicturePage from "./Pictures";
import RecipePage from "./Recipes";

type RouterParams = {
    page: string;
};

const Router = ({ page }: RouterParams) => {
    if (page === "kuvat") {
        return <PicturePage />;
    } else if (page === "reseptit") {
        return <RecipePage />;
    } else {
        return <HomePage />;
    }
};

export default Router;
