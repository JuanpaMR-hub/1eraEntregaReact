import {useContext} from "react"
import { CartContext } from "../components/context/CartContext"
import { Link } from "react-router-dom"

import CartItem from "../components/CartItem"


const Cart = () =>{
    const  {cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <span class="icon">
                    <i class="fas fa-home"></i>
                </span>
                <Link to="/" className="button is-primary">Ver Productos</Link>
            </div>
        )
    }   


    return(
        <div>
            
            {cart.map(p => <CartItem key={p.id}{...p}/> )}
            <h3>Total: ${totalPrice}</h3>
            <button onClick={()=> clearCart()} className="button is-danger">Limpiar Carrito</button>
            <Link to="/checkout" className="Option button is-primary">Checkout</Link>
        </div>
    )
}

export default Cart