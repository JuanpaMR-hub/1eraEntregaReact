import {getDocs, collection, query, where, writeBatch, addDoc, documentId} from "firebase/firestore"
import {db} from "../services/firebase/firebaseConfig"
import { useContext, useState } from "react";
import { CartContext } from "../components/context/CartContext";

import CheckoutForm from "../components/CheckoutForm"
import { Link } from "react-router-dom";


const Checkout = () =>{
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const {cart, totalPrice, clearCart} = useContext(CartContext);



    const createOrder = async({name, phone, email}) =>{
        setLoading(true)


        //Crear el objeto   
        try{
            const objOrder = {
                buyer :{
                    name, phone, email
                },
                items: cart,
                total: totalPrice,
                date : new Date()
            }
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestone = await getDocs(query(productsRef, where(documentId(),'in',ids)));
            const {docs} = productsAddedFromFirestone;


            docs.forEach(doc=>{
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if(stockDb > prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity});
                }else{
                    outOfStock.push({id:doc.id, ...dataDoc})
                }               
            })

            if(outOfStock.length === 0){
                await batch.commit();

                const orderRef = collection(db, 'orders');
                const orderAdded= await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart()
            }else{
                console.error("hay productos que estan fuera de stock")
            }
        } catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }

    }


    if(loading){
        return(
            <div className="hero is-info">
                <div className="hero-body">
                    <h1 className="hero-title is-size-2">Se esta creando su orden...</h1>
                </div>
            </div>
        )
    }
    if(orderId){
        return(
            
            <div className="hero is-success is-medium">
                <div className="hero-body">
                    <h1 className="hero-title is-size-1">Orden creada correctamente!</h1>
                    <p className="hero-subtitle is-size-4">El id de su orden es: {orderId}</p>
                </div>
                <Link to="/" className="hero-foot">
                        <button className="button is-dark is-large  has-text-weight-semibold">
                        Volver al inicio
                        </button>
                </Link>
                


            </div>
        
        )
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )

}


export default Checkout;