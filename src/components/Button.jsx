import "../styles/global.css"
import "../styles/index.css"
import CardForm from "./CardForm"
import { useState } from "react"


export default function Button() {
    const [showCardForm, setShowCardForm] = useState(false);

    const handleOpenForm = () => {
        setShowCardForm(true);
    };

    return (
        <div className="flex justify-center ">
            <button
                className="btn  mx-auto"
                onClick={handleOpenForm}
            >
                Add new card
            </button>

            {showCardForm && <CardForm onAddCard={handleOpenForm} />}
        </div>
    );
}