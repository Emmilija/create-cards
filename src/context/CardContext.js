import { createContext, useState, useEffect } from "react";




 export const CardContext = createContext()

 export const  CardProvider = ({children}) => {
 const [cardData, setCardData] = useState([])

 const [showForm, setShowForm] = useState(false);

 const [selectedCardInfo, setSelectedCardInfo] = useState(null)



 useEffect(() => {
    fetchCard()
 
}, [])



//Fetch cards
 const fetchCard = async () => {
    try {
         const response = await fetch(`/card?_sort=id`)
         const data = await response.json();
         setCardData(data);
     }
    
     catch (error) {
         console.log('Error fetching card data:', error);
    }
 };

 const openForm = (cardData) => {
 
    setSelectedCardInfo(cardData);
    setShowForm(true);
      
  };

  const closeForm = () => {
    setShowForm(false);
  };


//update card

const updateCard = async (id, updItem
  ) => {
    try {
        const response = await fetch(`/card/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        });

        if (!response.ok) {
            throw new Error('Failed to update card. Server returned status: ' + response.status);
        }

        const selectedCard = await response.json();

const updatedCardData = cardData.map((card) => card.id === selectedCard.id ? selectedCard : card)

        // Update the cardData state
        setCardData(updatedCardData);
        setSelectedCardInfo(selectedCard) 
            } catch (error) {
                console.error('Error updating card:', error);
              
            }
       
    } 


    //add new card
    const addCard = async(newCard) => {
      try {
          const response = await fetch('/card', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newCard),
          })
          const data = await response.json()
                  setCardData([data, ...cardData])
              
      }catch (error) {
          console.error('Error adding user', error)
      }
  
      }

      
      const deleteCard = async (id) => {
        if(window.confirm("are you sure you want to delete this card? ")) {
            try{
                await fetch(`/card/${id}`, {method: 'DELETE'})
    
            
                setCardData(cardData.filter((item) => item.id !== id));
             
            }catch(error) {
                console.error('Error deleting card:', error)
            }
    
    }
    
    }




    return <CardContext.Provider value={{
         cardData,
         showForm,
         updateCard,
         openForm,
         closeForm,
         addCard,
         deleteCard,
         setSelectedCardInfo,
        
         initialData: selectedCardInfo
         ? {
             id: selectedCardInfo.id,
             name: selectedCardInfo.name,
             number: selectedCardInfo.number,
             expiry: selectedCardInfo.expiry,
             cvc: selectedCardInfo.cvc,
           }
         : null,

        
     }}>
         {children}

    
    </CardContext.Provider>
}

