import "../styles/ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div className="column is-full">
        <button className="button is-primary is-medium is-fullwidth has-text-weight-semibold" onClick={()=>onAdd(quantity)} disabled={!stock}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
