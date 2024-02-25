import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CardContext = createContext()

export const  CardProvider = ({children}) => {
const [cardData, setCardData] = useState([
    {
    id: '1',
    name: "Emilija",
    number: '5456454545644564',
    expiry: '162',
    cvc: '123',
    type: "Mastercard",
    }
])

const [showForm, setShowForm] = useState(false);

const [cardEdit, setCardEdit] = useState({
    item: {},
    edit: false,
})


//editing card
const selectedCardForEdit = (item) => {
    setCardEdit({item, edit: true,})
    setShowForm(true)
}


const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };



//add card
const addCard = (newCard) => {
    newCard.id = uuidv4()
   setCardData([newCard, ...cardData])
  }

//delte card
const deleteCard = (id) => {
    if(window.confirm("are you sure you want to delete this card? ")) {
        setCardData(cardData.filter((item) => item.id !== id))
}



}
    return <CardContext.Provider value={{
        cardData,
        showForm,
        openForm,
        closeForm,
        addCard,
        deleteCard,
        selectedCardForEdit,
        cardEdit,
        
    }}>
        {children}
    </CardContext.Provider>
}

