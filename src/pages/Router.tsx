import HomePage from "./Home";
import PicturePage from "./Pictures";
import RecipePage from "./Recipes";

export type PageRoute = "kuvat" | "reseptit" | "home";
type RouterParams = {
    page: PageRoute;
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
