import { useState } from "react"
import "../styles/index.css"



export default function CardForm({onAddCard, onClose}) {
    const [cardInfo, setCardInfo] = useState({
        name:"",
        number:"",
        expiry:"",
        cvv:""
    });

    const [isFormValid, setIsFormValid] = useState(false);

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

        setIsFormValid(checkFormValidity());
        
        setCardInfo({
            ...cardInfo,
            [name]: value
        })

      }
 // Check if any input field is empty
 const checkFormValidity = () => {
  for (let key in cardInfo) {
      if (cardInfo[key].trim() === "") {
          return false;
      }
  }
  return true;
};
  


    return(
<div className="heading-container relative h-full  flex flex-col items-start w-full rounded-tl-lg">
    <button className="close-icon flex justify-end " onClick={onClose}>
    <svg
      className="w-8 h-4"
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="#1A212C"
      onClick={onClose}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.299 6.99971L13.316 3.98271C14.2272 3.07154 14.2272 1.59454 13.316 0.683375C12.4049 -0.227792 10.9279 -0.227792 10.0167 0.683375L6.99971 3.70038L3.98271 0.683375C3.07154 -0.227792 1.59454 -0.227792 0.683375 0.683375C-0.227792 1.59454 -0.227792 3.07154 0.683375 3.98271L3.70038 6.99971L0.683375 10.0167C-0.227792 10.9279 -0.227792 12.4049 0.683375 13.316C1.13837 13.7722 1.73571 13.9997 2.33304 13.9997C2.93038 13.9997 3.52654 13.7722 3.98271 13.316L6.99971 10.299L10.0167 13.316C10.4717 13.7722 11.069 13.9997 11.6664 13.9997C12.2637 13.9997 12.8599 13.7722 13.316 13.316C14.2272 12.4049 14.2272 10.9279 13.316 10.0167L10.299 6.99971Z"
      />
    </svg>
    </button>

<div className="flex-column justify-center items-center my-16 ">

<form className="form-container bg-white shadow-md rounded px-8 pt-8" onSubmit={handleSubmit}>
<h1 className="text-30  font-bold mb-8 ">Add your card details</h1>
<div className="h-32 space-y-6">
        <div className=" mb-16">
          <label className=" text-gray-700 text-16 font-bold mb-2" htmlFor="name">
            Name in card
          </label>
          <input
            className="shadow appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="name"
            placeholder=" Jane Doe"
            aria-label="Full name"
            name="name"
            value={cardInfo.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-16">
          <label className="block text-gray-700 text-16 font-bold mb-2" htmlFor="number">
            Card number
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-1 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            placeholder=" 0000  0000  0000  0000"
            name="number"
            value={cardInfo.number}
            onChange={handleChange}
          />
        </div>

        <div className="mb-16">
          <label className="text-gray-700 text-16 font-bold mb-2" htmlFor="number">
            Expiry date
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-1 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="expiry"
            type="expiry"
            placeholder=" 00/00"
            name="expiry"
            value={cardInfo.expiry}
            onChange={handleChange}
          />
        </div>
      
        <div className="mb-16">
          <label className="text-gray-700 text-16 font-bold mb-2" htmlFor="number">
            CVC (security code)
          </label>
          <input
            className="shadow appearance-none border border-red-500 w-full py-1 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="cvv"
            type="number"
            placeholder=" 000"
            name="cvv"
            value={cardInfo.cvv}
            onChange={handleChange}
          />
        </div>
        </div>
        
        <div className="flex justify-center">
                        <button className={`btn mx-auto text-16 ${isFormValid ? 'btn-active' : 'btn-disabled'}`}
                                disabled={!isFormValid} >Confirm</button>
                    </div>
      </form>

</div>
    </div>
   
      

    );
    }
