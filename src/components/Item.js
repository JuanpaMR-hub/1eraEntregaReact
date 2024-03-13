import { Link } from "react-router-dom";
import "../styles/Item.css"

function Item({id, title, price,stock, description, category, image, rating}) {


  return (
    <div className="card shadow-lg is-cursor-pointer">
        <div className="card-image cover-image is-overflow-hidden">
            <figure className="image">
                <img src={image} alt="Placeholder"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="content">
                <p className="is-uppercase is-text-wide-1 is-size-7 has-text-weight-semibold">{title}</p>
                <h3 className="mb-1">${price}</h3>
                <p className="mb-1">Cantidad: {stock}</p>
                <p className="has-text-grey-light description">{rating.rate} <span class="has-text-primary-dark">&#9733;&#9733;&#9733;&#9733;&#9733; </span> {rating.count} Reviews</p>
                <Link to={`/item/${id}`} className="button is-primary is-medium is-fullwidth has-text-weight-semibold">Ver Producto</Link>
            </div>
        </div>
    </div>

  );
}

export default Item;
