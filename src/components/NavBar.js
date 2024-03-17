import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";



function NavBar(){
    return(
        <nav className="navbar is-black">
            <div className="navbar-brand">
                <Link className="navbar-item" to={"/"}>Logo</Link>

            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to={"/"}>Inicio</Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link">Ropa</Link>
                        <div className="navbar-dropdown">
                            <Link className="navbar-item" to={"/category/men's clothing"}>Hombre</Link>
                            <Link className="navbar-item" to={"/category/women's clothing "}>Mujer</Link>

                        </div>

                    </div>
                    
                    <Link className="navbar-item" to={"/category/jewelery"}>Joyeria</Link>
                    <Link className="navbar-item" to={"/category/electronics"}>Electronica</Link>


                </div>
                <div className="navbar-end">
                <div className="navbar-item">
                <CartWidget/>
                </div>

            </div>
            </div>
           

            
        </nav>
    )
}

export default NavBar;