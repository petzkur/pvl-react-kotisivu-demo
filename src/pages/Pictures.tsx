import { useState } from "react";
import Travel from "../components/pictures/Travel";
import { matkat } from "../data/pictures";
import "./pictures.css";

const PicturePage = () => {
    const [kohde, setKohde] = useState("");

    const matka = matkat.filter(({ kohde: k }) => k === kohde);
    const kuvat = matka.length > 0 ? <Travel {...matka[0]} /> : <div></div>;
    return (
        <div>
            <h2>Kuvat</h2>

            <div className="buttons">
                {matkat.map(({ kohde }) => (
                    <button onClick={() => setKohde(kohde)}>{kohde}</button>
                ))}
            </div>

            {/* {matkaFiltered.map((props) => (
                <Travel {...props} />
            ))} */}
            {kuvat}
        </div>
    );
};

export default PicturePage;
