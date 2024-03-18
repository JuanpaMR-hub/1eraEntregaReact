import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";


import {getDoc, doc} from "firebase/firestore"
import {db} from "../services/firebase/firebaseConfig"



function ItemDetailContainer(){

    const [product , setProduct] = useState()
    const [loading, setLoading] = useState([true])

    const {itemId} = useParams()

    useEffect(()=>{

        const docRef = doc(db, 'products', itemId)
        
        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productAdapted = {id:response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])
    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;