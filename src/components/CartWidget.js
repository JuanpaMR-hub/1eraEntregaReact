import carrito from "../img/cartimg.png"
function CartWidget(){
    return(
        <div>
            <a className="cart" href="#"><img src={carrito}/></a>
        </div>
    )
}

export default CartWidget;