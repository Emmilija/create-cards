import { CardContext } from "../context/CardContext"
import CardData from "../data/CardData"
import CardList from "./CardList"
import {useContext } from "react"
import CardForm from "./CardForm"


export default function CardContainer() {
    const {cardData, showForm, openForm, closeForm} = useContext(CardContext)
   
    

      

    if(!cardData || CardData.length === 0) {
        return <p>No data</p>
    }
    console.log(cardData)

    return (
      <div >
          <div className="w-full">
              {cardData.map((item) => (
                  <CardList key={item.id} item={item} />
              ))}
          </div>

          {showForm && (
              <div className="absolute inset-0 bg-black bg-opacity-75 w-full h-full ">
                <CardForm />
              </div>
            )}

              <div className="w-full flex justify-center items-center h-auto">
                  <button className="btn " onClick={() => {openForm()}}>Add new card</button>
              </div>
          
      </div>
  );
  
}


