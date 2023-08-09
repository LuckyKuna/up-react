import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; 
import Catalog from './Catalog';

function Goods(props) {
    const catalog = Catalog();

    return (
        <Product catalog={catalog} />
    );    
}

function Product(props) {
    let url = useLocation();
    let data = props.catalog;
    const listItems = data.map(item =>
        <li key={item.art}>
            <div className='catalog-item'>
                <img src={item.image} alt={item.name}  className='image'></img>
                <div className='name'>{item.name}</div>
                <div className='price'>{item.price}</div>
                <Link className="buy-button" to={`${url.pathname}/${item.art}`}>Переглянути</Link>
            </div>
        </li>)
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>           
    )
}

export default Goods;