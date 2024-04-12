import { useState, useContext, useEffect } from "react"
import "../styles/index.css"
import Button from "./Button"
import { CardContext } from "../context/CardContext"
import Success from '../assets/images/form-success.svg'
import Error from '../assets/images/form-error.svg'


export default function CardForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const[btnDisabled, setBtnDisabled] = useState(true)
 const [nameError, setNameError] = useState('');
const [numberError, setNumberError] = useState('');
const [expiryError, setExpiryError] = useState('');
const [cvcError, setCvcError] = useState('');
const [cardName, setCardName] = useState('')

const { addCard, closeForm, updateCard, initialData} = useContext(CardContext)
  
// eslint-disable-next-line
const [formData, setFormData] = useState(initialData || { name: "", number: "", expiry: "", cvc: "", cardName: "", });

useEffect(() => {
  if (initialData) {
    setName(initialData.name || '');
    setNumber(initialData.number || '');
    setExpiry(initialData.expiry || '');
    setCvc(initialData.cvc || '');
    setCardName(initialData || '')
    setFormData(initialData);
    setCardName(initialData.cardName);
  }
}, [initialData]);




const handleName = (e) => {
  const inputName = e.target.value;

  setName(inputName);

  let nameError = "";
  let btnDisabled = false;

  switch (true) {
    case /\d/.test(inputName):
      nameError = "Enter a valid name";
      btnDisabled = true;
      break;
    case inputName === "":
      nameError = "Please fill in your name";
      btnDisabled = true;
      break;
    default:
      btnDisabled = false;
      break;
  }

  setNameError(nameError);
  setBtnDisabled(btnDisabled);
};

      const creditCardType = (cc) => {
        let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
        let mastercard = new RegExp('^5[1-5][0-9]{14}$|^2[2-7][0-9]{14}$');
       
        if (visa.test(cc)) {
          return 'visa';
        }
        if (mastercard.test(cc)) {
          return 'mastercard';
        }
        return "unknown";
      }


      const handleNumber = (e) => {
        const inputValue = e.target.value;
        const numberValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
        let formattedValue = '';
        const detectedCardName = creditCardType(numberValue);
        let numberError = ''
       
        setCardName(detectedCardName);
      
        // Update the state with the formatted value and detected card name
        // setCardName(currentCardName => currentCardName !== detectedCardName ? detectedCardName : currentCardName);
      
        // Add spaces every 4 digits
        for (let i = 0; i < numberValue.length; i++) {
          if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
          }
          formattedValue += numberValue[i];
        }
      
        // Update the state with the formatted value
        setNumber(formattedValue);
      
        // Check if the input contains letters
        const containsLetters = /[a-zA-Z]/;
        if (containsLetters.test(inputValue)) {
         numberError = 'Please enter a valid credit card number';
        }
      
        // Set error message based on card type using switch
        switch (detectedCardName) {
          case 'visa':
          case 'mastercard':
            numberError = '';
            break;
          default:
            numberError = 'Please enter a valid credit card number';
            break;
        }
      
        // Update the state with the error message
        setNumberError(numberError);
      };




      const handleExpiry = (e) => {
        const inputExpiry = e.target.value;
        const formattedExpiry = inputExpiry.replace(/\D/g, ''); 
   
        let formattedDisplayExpiry = formattedExpiry;
      
        if (formattedExpiry.length > 2) {
          formattedDisplayExpiry = formattedExpiry.slice(0, 2) + '/' + formattedExpiry.slice(2);
        }
        console.log("Formatted Display Expiry:", formattedDisplayExpiry);
        setExpiry(formattedDisplayExpiry);
        console.log("Formatted Display Expiry:", formattedDisplayExpiry);
        // Update the state with the formatted expiry and error message
        const isValidExpiry = /^([0-9]{2})\/(0[1-9]|1[0-2])$/.test(formattedDisplayExpiry);
        let expiryError = '';
      
        switch (true) {
          case isValidExpiry:
            expiryError = 'Please enter a valid expiry date';
            console.log("isValidExpiry:", isValidExpiry);
            break;
          case formattedDisplayExpiry === '00/00' || formattedDisplayExpiry === '':
            expiryError = 'Please enter a valid expiry date';
            break;
          default:
            expiryError = '';
            break;
        }
      
        setExpiryError(expiryError);
      };

      const handleCvc = (e) => {
        const inputCvc = e.target.value;
        setCvc(inputCvc);
      
        const regexPattern = /^[0-9]{3,4}$/;
        let cvcError = '';
      
        switch (true) {
          case !regexPattern.test(inputCvc):
            cvcError = 'Please enter a valid security code';
            break;
          default:
            cvcError = '';
            break;
        }
      
        setCvcError(cvcError);
      };
   
      const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "" && number !== "" && expiry !== "" && cvc !== "") {
          const newCard = {
            name,
            number,
            expiry,
            cvc,
            cardName,
          };
       
          if (initialData && initialData.id) {
            updateCard(initialData.id, newCard);
          } else {
            
            addCard(newCard);
          }
      
          // Reset form fields
          setFormData({ name: "", number: "", expiry: "", cvc: "", cardName: "" });
    
          closeForm();
        }
      };



    return(
      
<div className="heading-container sm:h-1/4 lg:h-1/3 xl:h-1/2 flex flex-col  items-center w-full rounded-tl-lg -mt-4">


<div className="color-b">
  <button onClick={() => closeForm()} className="close-icon " >
    <svg
      className="w-8 h-4"
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="#1A212C"
      
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.299 6.99971L13.316 3.98271C14.2272 3.07154 14.2272 1.59454 13.316 0.683375C12.4049 -0.227792 10.9279 -0.227792 10.0167 0.683375L6.99971 3.70038L3.98271 0.683375C3.07154 -0.227792 1.59454 -0.227792 0.683375 0.683375C-0.227792 1.59454 -0.227792 3.07154 0.683375 3.98271L3.70038 6.99971L0.683375 10.0167C-0.227792 10.9279 -0.227792 12.4049 0.683375 13.316C1.13837 13.7722 1.73571 13.9997 2.33304 13.9997C2.93038 13.9997 3.52654 13.7722 3.98271 13.316L6.99971 10.299L10.0167 13.316C10.4717 13.7722 11.069 13.9997 11.6664 13.9997C12.2637 13.9997 12.8599 13.7722 13.316 13.316C14.2272 12.4049 14.2272 10.9279 13.316 10.0167L10.299 6.99971Z"
      />
    </svg>
    </button>
  </div>
    



<div className="around-form w-full">

<form onSubmit={handleSubmit} className="form-container bg-white flex flex-col justify-start shadow-md rounded pt-8 pb-4 sm:pb-8  " >
<h1 className="font-bold mb-8">{initialData ? 'Edit your card details' : 'Add your card details'}</h1>
<div className="h-32 space-y-6">
<label className=" text-gray-700 text-16 font-bold mb-2" htmlFor="name">
            Name in card
          </label>
        <div className={`shows mb-8 flex flex-row` }>
       
          <input
            className="shadow appearance-none bg-transparent border-b border-gray-400 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="name"
            placeholder=" Jane Doe"
            aria-label="Full name"
            name="name"
            value={name}
            onChange={handleName}
            
          />
         {!nameError && name.trim() && (
         
  <img src={Success} alt="success" />

)}
{nameError && (
  <img src={Error} alt="error" />
)}
        </div>
        
        <label className="block text-gray-700 text-16 font-bold mb-2" htmlFor="number">
            Card number
          </label>
        <div className={`mb-8  flex flex-row`}>
        
          <input
            className = "shadow appearance-none border border-red-500 rounded w-full py-1 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            maxLength="19"
            placeholder=" 0000  0000  0000  0000"
            name="number"
            value={number}
            onChange={handleNumber}
          />
 {(number && !numberError) && (
    <img src={Success} alt="success" />
  )}
  {numberError && (
    <img src={Error} alt="error" />
  )}
        </div>
        <label className="text-gray-700 text-16 font-bold mb-2" htmlFor="expiry">
            Expiry date
          </label>
        <div className={`mb-8  flex flex-row`}>
       
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-1 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="expiry"
            type="text"
            maxLength="5"
            placeholder=" 00/00"
            name="expiry"
            value={expiry}
            onChange={handleExpiry}
          />
            {expiryError && (
            <img src={Error} alt="error" />
        )}
        {expiry && !expiryError && (
            <img src={Success} alt="success" />
        )}
        </div>
     
        <label className="text-gray-700 text-16 font-bold mb-2" htmlFor="number">
            CVC (security code)
          </label>
        <div className={`mb-8  flex flex-row`}>
      
          <input
            className="shadow appearance-none border border-red-500 w-full py-1 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="cvv"
            maxLength="3"
            type="text"
            placeholder="000"
            name="cvv"
            value={cvc}
            onChange={handleCvc}
          />
 {(cvc && !cvcError) && (
    <img src={Success} alt="success" />
  )}
  {cvcError && (
    <img src={Error} alt="error" />
  )}
        </div>
    
        </div>
        
        <div className="flex justify-center items-center">
                        <Button closeForm={() => {closeForm()}} onSubmit={handleSubmit} btnDisabled={btnDisabled} className="btn mx-auto text-16"> Confirm </Button>
                    </div>
      </form>
</div>



    </div>
   
      

    );
    }
