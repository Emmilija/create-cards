import { useState } from "react"
import "../styles/index.css"


export default function CardForm({onAddCard}) {
    const [cardInfo, setCardInfo] = useState({
        name:"",
        number:"",
        expiry:"",
        cvv:""
    });

    const handleSubmit = (event) => {
        event.preventDefault()
onAddCard(cardInfo);
setCardInfo({
    name:"",
    number:"",
    expiry:"",
    cvv:""
})
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setCardInfo({
            ...cardInfo,
            [name]: value
        })
    }


    return(
        <div className="modal"> 
        <div className="modal-container">
        <h1>Add your card details</h1>

<form onSubmit={handleSubmit} className="card-form">
           <label htmlFor="name">Name in card</label>
           <input 
               type="text" 
               id="name" 
               name="name" 
               value={cardInfo.name} 
               onChange={handleChange} 
               required 
           />

           <label htmlFor="number">Card number</label>
           <input 
               type="text" 
               id="number" 
               name="number" 
               value={cardInfo.number} 
               onChange={handleChange} 
               required 
           />

           <label htmlFor="expiry">Expiry date</label>
           <input 
               type="text" 
               id="expiry" 
               name="expiry" 
               value={cardInfo.expiry} 
               onChange={handleChange} 
               required 
           />

           <label htmlFor="cvv">CVC(Security code)</label>
           <input 
               type="text" 
               id="cvv" 
               name="cvv" 
               value={cardInfo.cvv} 
               onChange={handleChange} 
               required 
           />

           <button className="add-card-but" type="submit">Confirm</button>
       </form>
        </div>
       
        </div>
    
    )
}



