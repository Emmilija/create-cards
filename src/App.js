import Button from "./components/Button";
import "./styles/global.css"
import "./styles/index.css"
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import { useState } from "react";


function App() {
  const [showCardForm, setShowCardForm] = useState(false);
  const[cards, setCards] = useState([])


  const handleOpenForm = () => {
    setShowCardForm(true);
  };

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
    console.log("This is the new card",newCard)
};

  const handleCloseForm = () => {
    setShowCardForm(false);
  };
  return (
    <div className="w-full max-h-xs ">
      <div className="container mx-auto px-8 py-8  h-full flex flex-col justify-between ">
        <header className="mb-8 h-16 flex flex-col justify-start items-start">
     
          <h1 className="text-primary font-black text-30">Your Cards</h1>
          <p className="text-gray-dark text-14">
            Add, edit or delete your cards any time
          </p>
   
        </header>
     
        <div>

          <div className="mb-16">
            <CardList cardInfo={cards} />
          </div>

          {showCardForm && (
            <div className="absolute inset-0 bg-black bg-opacity-75 w-full h-full ">
              <CardForm onAddCard={handleAddCard} onClose={handleCloseForm} />
            </div>
          )}


{!showCardForm && (
            <div>
              <Button onAddCard={handleOpenForm} />
            </div>
          )}

        </div>

    
      </div>
    </div>
  );
}

export default App;


