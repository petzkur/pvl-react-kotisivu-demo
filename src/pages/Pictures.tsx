import Travel from "../components/pictures/Travel";
import { matkat } from "../data/pictures";

const PicturePage = () => {
    return (
        <div>
            <h2>Kuvat</h2>
            {matkat.map((props) => (
                <Travel {...props} />
            ))}
        </div>
    );
};

export default PicturePage;
