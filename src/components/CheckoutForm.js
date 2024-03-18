import { useState } from "react"


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')



    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <form onSubmit={handleConfirm} className="form">
            <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="e.g Alex Smith"
                        value={name}
                        onChange={({target})=>setName(target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Telefono</label>
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="e.g. alexsmith@gmail.com"
                        value={phone}
                        onChange={({target})=>setPhone(target.value)}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Correo</label>
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="e.g. alexsmith@gmail.com"
                        value={email}
                        onChange={({target})=>setEmail(target.value)}/>
                </div>
            </div>


            <div class="control">
                <button class="button is-primary">Submit</button>
            </div>
        </form>
    )
}

export default CheckoutForm;