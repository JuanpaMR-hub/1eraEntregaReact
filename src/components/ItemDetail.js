import "../styles/ItemDetail.css";
import ItemCount from "./ItemCount";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const ItemDetail = ({
  id,
  title,
  price,
  stock,
  description,
  category,
  image,
  rating,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext)

  const handdleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item ={
      id, title, price
    }

    addItem(item,quantity)
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card is-horizontal shadow-md transform is-duration-300 hover-shadow-xl hover-translate-y">
              <div className="card-image">
                <figure className="image">
                  <img src={image} alt={category} />
                </figure>
              </div>

              <div className="card-content p-0 is-flex is-flex-direction-column">
                <div className="content p-5 has-text-grey-light">
                  <h3>{title}</h3>
                  <p>Cantidad: {stock}</p>
                  <p className="is-size-6 has-text-weight-normal">
                    {description}
                  </p>
                </div>
                <div className="has-background-info-light">
                  <div className="content p-5">
                    <div className="columns is-flex-direction-column is-align-items-center">
                      <div className="column">
                        <div className="is-full">
                          <h3 className="mb-1">${price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content p-5 has-text-grey-light">
                    {quantityAdded > 0 ? (
                      <Link to="/cart" className="Option">
                        <button className="button is-primary is-medium is-fullwidth has-text-weight-semibold">
                          Terminar compra
                        </button>
                      </Link>
                    ) : (
                      <ItemCount
                        initial={1}
                        stock={stock}
                        onAdd={handdleOnAdd}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
