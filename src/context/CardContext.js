import { createContext, useState } from "react";
import CardData from "../data/CardData";


const CardContext = createContext()

const [CardData, setCardData] = useState([
    {
    id: '1',
    name: "Emilija",
    number: '5456454545644564',
    expiry: '162',
    cvv: '123',
    type: "Mastercard",
    }
])

export const CardProvider = ({children}) => {


    return <CardContext.Provider value={{
        card,
    }}>
        {children}
    </CardContext.Provider>
}

export default CardContext;