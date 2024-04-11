import { CardContext } from "../context/CardContext"
import CardList from "./CardList"
import {useContext } from "react"
import CardForm from "./CardForm"


export default function CardContainer() {
    const {cardData, showForm, openForm} = useContext(CardContext)
   
    

      

    if(!cardData || cardData.length === 0) {
        return <p>No data</p>
    }
    console.log(cardData)

    return (
    
      <div className="card-cont-component" >



    {showForm && (
             <div className="absolute inset-0 w-full h-full ">
                <CardForm cardData={cardData}/>
                </div>
            )}




          <div className="card-list-container w-full">
              {cardData.map((item) => (
                  <CardList key={item.id}  item={item} />
              ))}
          </div>

  

{!showForm && (
        <div className="center-btn">
          <button className="btn" onClick={() => openForm()}>
            Add new card
          </button>
        </div>
      )}
          
      </div>
   
  );
  
}


