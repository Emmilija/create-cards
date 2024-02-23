import "../styles/index.css"
import cardLogoMaster from "../assets/images/mastercard-logo.svg"
import editIcon from "../assets/images/edit-icon.svg"
import cardLogoVisa from "../assets/images/visa-logo.svg"
import { useState } from "react"
import CardForm from "./CardForm"

export default function CardList({cardInfo}) {
  const [showCardForm, setShowCardForm] = useState(false)
  console.log(
    "CardList:", cardInfo); 

  if (!cardInfo) {
    return <div>No card information available</div>;
  }

const editCard = () => {
  setShowCardForm(!showCardForm)
}

  return (
    <div className="h-auto">
      {cardInfo.map((card, index) => (
        <div key={index} className={`card-container  ${card.type === 'VISA' ? 'card-visa' : ''} ${card.type === 'visa' ? 'card-visa' : 'card-master'}`}>
          <div className={`card w-full h-full ${card.type === 'VISA' ? 'VISA' : 'card-master'}`}>
            <div className="logo-container flex justify-between items-center">
              <div>
                <img
                  src={card.type === "VISA" ? cardLogoVisa : cardLogoMaster}
                  alt="Card Logo"
                />
              </div>
              <div className="flex justify-between">
                <div className="info mr-4 flex flex-col justify-end items-end">
                  <span className="color mr-4 small text-4">CVC</span>
                  <p className="font-bold text-14">{card.cvv}</p>
                </div>
                <div className="info mr-2 flex flex-col justify-end items-end">
                  <span className="color small">EXPIRES</span>
                  <p className="font-bold text-14 text-white">{card.expiry}</p>
                </div>
              </div>
            </div>
            <div className="name-container">
              <div className="flex-col justify-between">
                <p className="">{card.name}</p>
                <p className="color">{card.number}</p>
              </div>
              <button onClick={editCard} className="flex justify-end">
                <img src={editIcon} alt="Edit Icon" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      ))}
    {showCardForm && (
        <div className="form-container">
     <CardForm />
        </div>
      )}
        
    </div>
  );
}



  
//     return (
//       <div className="h-auto">
//         {cardInfo.map((card,index) => (

//         ))}
//         <div key={index} className="card-master {card.type === 'visa' ? 'card-visa' : 'card-master'}">
//           <div className="card-container  ">
//             <div className="card w-full h-full ">

//               <div className=" logo-container flex justify-between items-center ">
//        <div>
//        <img
//                   src={card.type === "visa" ? cardLogoVisa :cardLogoMaster}
//                   alt="Card Logo Mastercard"
//                   className=""
//                 />
//        </div>
           

// <div className="flex flex-row justify-end items-end">
                    
//                   <div className="info  mr-4 flex flex-col justify-end items-end">
//                     <span className="color text-4">CVC</span>
//                     <p className=" font-bold text-14">{cardInfo.cvv}</p>
//                   </div>

//                   <div className="info mr-2 flex flex-col justify-end items-end">
//                     <span className="color">EXPIRES</span>
//                     <p className="font-bold text-14 text-white">{cardInfo.expiry}</p>
//                   </div>

//                 </div>
//               </div>



//               <div className="name-container">
//                 <div className="flex-col justify-between ">
//                   <p className="font-bold text-white"> {cardInfo.name}</p>
//                   <p className="color "> {cardInfo.number}</p>
//                 </div>

//                 <div className="flex justify-end">
//                   <img src={editIcon} alt="Edit Icon" className="w-8 h-8 " />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//          <div className="card-visa">
//         <div className="card-container two  flex justify-between items-center">
//             <div className="card absolute w-full h-full">

//               <div className=" logo-container flex justify-between items-center ">
//        <div>
//        <img
//                   src={cardLogoVisa}
//                   alt="Card Logo Mastercard"
//                   className=""
//                 />
//        </div>
           

// <div className=" flex flex-row justify-end items-end">
                    
//                   <div className="mr-4 flex flex-col justify-end items-end">
//                     <span className="black text-10">CVC</span>
//                     <p className=" font-bold text-14">{cardInfo.cvv}</p>
//                   </div>

//                   <div className="mr-2 flex flex-col justify-end items-end">
//                     <span className="black  text-10">EXPIRES</span>
//                     <p className="font-bold text-14">{}</p>
//                   </div>

//                 </div>
//               </div>



//               <div className="name-container">
//                 <div className="flex-col justify-between text-white">
//                   <h2 className="font-bold text-white "> {cardInfo.name}</h2>
//                   <p className="black "> {cardInfo.number}</p>
//                 </div>

//                 <div className="flex justify-end">
//                   <img src={editIcon} alt="Edit Icon" className="w-8 h-8 " />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     );
// }