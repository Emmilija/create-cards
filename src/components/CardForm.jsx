import { useState } from "react"
import "../styles/index.css"
import Button from "./Button";


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
<div className="relative w-full">
    <h1>Add your card details</h1>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4 flex-column">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name in the card
          </label>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="name"
            placeholder=" Jane Doe"
            aria-label="Full name"
            name="name"
            value={cardInfo.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
            Card number
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            placeholder=" **** **** **** ****"
            name="number"
            value={cardInfo.number}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
            Expiry date
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="expiry"
            type="expiry"
            placeholder=" **/**"
            name="expiry"
            value={cardInfo.expiry}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
            CVC (security code)
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="cvv"
            type="number"
            placeholder="***"
            name="cvv"
            value={cardInfo.cvv}
            onChange={handleChange}
          />
        </div>
      </form>
 <Button/>
     
    </div>
    )
}





