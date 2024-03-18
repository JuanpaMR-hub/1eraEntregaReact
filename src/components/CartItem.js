
const CartItem = (prop) =>{
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
            
            <div class="list-item-controls">
                <div class="buttons is-right">           
                    <button class="button">
                        Remove
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