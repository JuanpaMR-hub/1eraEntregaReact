import { useContext } from "react";
import { CartContext } from "./context/CartContext";


const CartItem = (prop) =>{

    const {removeItem} = useContext(CartContext)


    return(
        <div>
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            <div className="list has-overflow-ellipsis">
            <div className="list-item">
                <div className="list-item-content">
                    <i class="fa-solid fa-trash-can"></i>
                    <div className="list-item-title">{prop.title}</div>
                    <div className="list-item-description">x{prop.quantity}</div>
                </div>
            </div>
            
            <div className="list-item-controls">
                <div className="buttons is-right">           
                    <button className="button" onClick={()=>removeItem(prop.id)} >
                        Eliminar
                        {/* <span class="icon">
                            <i class="fa-solid fa-trash-can"></i>
                        </span> */}
                        </button>
                </div>
            </div>
        </div>

        </div>
        
    )


}

export default CartItem;