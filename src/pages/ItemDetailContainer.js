import { useEffect, useState } from "react";
import { getProductById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";




function ItemDetailContainer(){

    const [product , setProduct] = useState()

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(response=>{
            setProduct(response)
            console.log(response)
        })
        .catch(error=>{
            console.error(error)
        })
    },[itemId])
    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;