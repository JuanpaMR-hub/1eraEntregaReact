import CartWidget from "./CartWidget";

function NavBar(cart){
    return(
        <nav>
            <a className="logo" href="#">Logo</a>
            <ul>
                <li><a href="#">Poleras</a></li>
                <li><a href="#">Pantalones</a></li>
                <li><a href="#">Polerones</a></li>
            </ul>

            <CartWidget/>
        </nav>
    )
}

export default NavBar;