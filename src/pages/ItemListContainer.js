
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "../components/ItemList"
import { useParams } from "react-router-dom";

function ItemListContainer(){
    
    
    const [products, setproducts] = useState([]);

    const { categoryId } = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
        .then(response =>{
            setproducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoryId]);

    console.log(products)
    return(
        <div>
            <ItemList products={products}/>

        </div>
        
    ) 
}


export default ItemListContainer;