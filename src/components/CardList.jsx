import "../styles/index.css"
import cardLogoMaster from "../assets/images/mastercard-logo.svg"
import cardLogoVisa from "../assets/images/visa-logo.svg"
import { CardContext } from "../context/CardContext"
import { useContext } from "react"
import EditButton from "./EditButton"
import DeleteButton from './DeleteButton'


export default function CardList({ item
 }) {

const {deleteCard, selectedCardInfo, openForm} = useContext(CardContext)



const isVisa = item.cardName === 'visa';



  return (
    <div className="h-auto">
     
        <div  className={`card-container ${isVisa && "two"}`} >
          <div className="card w-full h-full">
            <div className="logo-container flex justify-between items-center">
              <div>
                <img
                  src={isVisa ? cardLogoVisa : cardLogoMaster}
                  alt="Card Logo"
                />
              </div>
              <div className="flex justify-between">
                <div className="info mr-4 flex flex-col justify-end items-end">
                  <span className="color mr-4 small text-4">CVC</span>
                  <p className="font-bold text-14">{item.cvc}</p>
                </div>
                <div className="info mr-2 flex flex-col justify-end items-end">
                  <span className="color small">EXPIRES</span>
                  <p className="font-bold text-14 text-white">{item.expiry}</p>
                </div>
              </div>
            </div>
            <div className="name-container">
              <div className="flex-col justify-between">
                <p className="font-bold">{item.name}</p>
                <p className="color">{item.number}</p>
              </div>
              <DeleteButton deleteCard={deleteCard} item={item}/>
             <EditButton selectedCardForEdit={selectedCardInfo} openForm={openForm} item={item}  />


              <button onClick={deleteCard}>
                
              </button>
    
            </div>
          </div>
 
        </div>
     



        
    </div>
  );
}






  
  // return (
//     <div className="h-auto">
//       <div className="card-master ">
//         <div className="card-container  ">
//           <div className="card w-full h-full ">

//             <div className=" logo-container flex justify-between items-center ">
//      <div>
//      <img
//                 src={cardLogoMaster}
//                 alt="Card Logo Mastercard"
//                 className=""
//               />
//      </div>
         

// <div className="flex flex-row justify-end items-end">
                  
//                 <div className="info  mr-4 flex flex-col justify-end items-end">
//                   <span className="color text-4">CVC</span>
//                   <p className=" font-bold text-14">000</p>
//                 </div>

//                 <div className="info mr-2 flex flex-col justify-end items-end">
//                   <span className="color">EXPIRES</span>
//                   <p className="font-bold text-14 text-white">000</p>
//                 </div>

//               </div>
//             </div>
//             <div className="name-container">
//               <div className="flex-col justify-between ">
//                 <p className="font-bold text-white">emilija karatashevska </p>
//                 <p className="color ">65466546454</p>
//               </div>

//               <div className="flex justify-end">
//                 <img src={cardLogoVisa} alt="Edit Icon" className="w-8 h-8 " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>




//        <div className="">
//        <div className={`card-container two flex justify-between items-center ${cardType}`}>
//           <div className="card absolute w-full h-full">

//             <div className=" logo-container flex justify-between items-center ">
//      <div>
//      <img
//                  src={cardInfo.type === 'VISA' ? cardLogoVisa : cardLogoMaster}
//                 alt="Card Logo Mastercard"
//                 className=""
//               />
//      </div>
         

// <div className=" flex flex-row justify-end items-end">
                  
//                 <div className="mr-4 flex flex-col justify-end items-end">
//                   <span className="black text-10">CVC</span>
//                   <p className=" font-bold text-14"></p>
//                 </div>

//                 <div className="mr-2 flex flex-col justify-end items-end">
//                   <span className="black  text-10">EXPIRES</span>
//                   <p className="font-bold text-14"></p>
//                 </div>

//               </div>
//             </div>



//             <div className="name-container">
//               <div className="flex-col justify-between text-white">
//                 <h2 className="font-bold text-white "> htrhtg</h2>
//                 <p className="black "> 25721572</p>
//               </div>

//               <div className="flex justify-end">
//                 <img src={editIcon} alt="Edit Icon" className="w-8 h-8 " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> 
//   );
// }












