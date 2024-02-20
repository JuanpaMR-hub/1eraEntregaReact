import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";



function NavBar(){
    return(
        <nav className="navbar is-primary">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Logo
                </a>

            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">Inicio</a>
                    <a className="navbar-item" href="/">Inicio</a>
                    <a className="navbar-item" href="/">Inicio</a>
                </div>
                <div className="navbar-end">
                <div className="navbar-item">
                    <img src="./img/cartimg.png" alt="CART"/>
                </div>

            </div>
            </div>
           

            {/* <CartWidget/> */}
        </nav>
    )
}

export default NavBar;