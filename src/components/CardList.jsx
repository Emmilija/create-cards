import "../styles/index.css"
import cardLogoMaster from "../assets/images/mastercard-logo.svg"

import editIcon from "../assets/images/edit-icon.svg"
import cardLogoVisa from "../assets/images/visa-logo.svg"

export default function CardList() {

    return(
<div className="h-auto">
        <div>
  <div className="card-container ">

<div className="card  ">


<div className="logo-container ">
    <img src={cardLogoMaster} alt="Card Logo Master" className="" />

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

    <div className="flex-column justify-between h-20">
      
        <p className="font-bold "> John Doe</p>
        <p className=" "> 1234  5678  9012  3456</p>
    </div>

    <div className="flex justify-end">
        <img src={editIcon} alt="Edit Icon" className="w-8 h-8 " />
    </div>
  
</div>
</div>

</div>

        </div>



<div>
<div className="card-container two ">

<div className="card  ">


<div className="logo-container ">
    <img src={cardLogoVisa} alt="Card Logo Visa" className="" />

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

    <div className="flex-column justify-between grow h-14">
      
        <p className="font-bold "> John Doe</p>
        <p className=""> 1234  5678  9012  3456</p>
    </div>

    <div className="flex justify-end">
        <img src={editIcon} alt="Edit Icon" className="w-8 h-8 " />
    </div>
  
</div>
</div>

</div>

</div>
    


</div>
   

    )
}