import "../styles/index.css"
import cardLogo from "../assets/images/mastercard-logo.svg"

import editIcon from "../assets/images/edit-icon.svg"


export default function CardList() {

    return(
      <div className="card-container ">

      <div className="card  ">


      <div className="logo-container ">
          <img src={cardLogo} alt="Card Logo" className="" />

          <div className="flex flex-row ">
              <div className="mr-4">
                  <span>CVC</span>
                  <p className=" font-bold">12/24</p>
              </div>
              <div>
                  <span>Expires</span>
                  <p className="text-lg font-bold">123</p>
              </div>
          </div>
      </div>
     

      <div className="name-container">

          <div className="m-8">
              <p className="text-lg font-bold">John Doe</p>
              <p className="text-lg font-bold">1234 5678 9012 3456</p>
          </div>

          <div className="flex justify-end">
              <img src={editIcon} alt="Edit Icon" className="w-8 h-8 " />
          </div>
        
      </div>
      </div>
      
  </div>
   

    )
}