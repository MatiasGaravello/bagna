import { addDoc, collection } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useContext } from "react"
import CartContext from "../../context/CartContext"


const Checkout = () => {

    const {cart, getQuantity, getTotal} = useContext(CartContext)

    const totalQuantity = getQuantity()

    const total = getTotal()

    const createOrder = () => {
        const objOrder = {
            buyer: {
                firstName: 'Carlos',
                lastName: 'Garavello',
                phone: '2611234566',
                address: 'Liniers 145'
            },
            items: cart,
            totalQuantity,
            total,
            date: new Date()
        }

        const orderRef = collection(db,'orders')
        addDoc(orderRef, objOrder).then(response =>{
            console.log(response)
        })
    }

    return (
        <>
            <h3>Checkout</h3>
            <button onClick={createOrder}>Generar Orden</button>
        </>
    )
}

export default Checkout