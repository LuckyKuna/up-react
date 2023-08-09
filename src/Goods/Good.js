import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"; 
import { useLocation } from "react-router-dom"; 
import Catalog from './Catalog';

function Good(){
    let { goodId } = useParams();
    let url = useLocation();
    console.log(url);
    const catalog = Catalog();
    const Item = catalog.filter(good => good.art === goodId ).map(good =>
        <div className="product-page">
            <div className="product-card">
                <div className="image-container">
                    <img src={window.location.origin + good.image} alt={good.name} className="image" />
                </div>
                <div className="details">
                    <div className="name">{good.name}</div>
                    <div className="price">{good.price}</div>
                    {/* <button onClick={() => console.log(goodId)} className="buy-button">Купити</button> */}
                    <Link className="buy-button" to={`../order/${good.art}`} >Купити</Link>
                </div>
            </div>
        </div>);
    
    return(
        <>
            {Item}
        </>
    );
}
export default Good;