import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";



function Home(){
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <footer className="footer">
                <div className="content has-text-centered">
                    Pie de pagina
                </div>
            </footer>
        </div>
    )
}

export default Home;