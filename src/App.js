import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css"
import "./styles/navbar.css"

import Layout from "./pages/Layout"
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer"




function App(){
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ItemListContainer/>}/>
                        <Route path="/category" element={<ItemListContainer/>} />
                        <Route path="/item" element={<ItemDetailContainer/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default App;