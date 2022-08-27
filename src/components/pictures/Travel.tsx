export type RecipeParams = {
    kohde: string;
    kuvat: string[];
};

const Travel = ({ kohde, kuvat }: RecipeParams) => {
    return (
        <div className="trip">
            <h3>{kohde}</h3>
            <div className="kuvat">
                {kuvat.map((x) => (
                    <img src={x} />
                ))}
            </div>
        </div>
    );
};

export default Travel;
