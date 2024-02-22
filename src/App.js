import Button from "./components/Button";
import "./styles/global.css"
import "./styles/index.css"
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import { useState } from "react";

function App() {
  const [showCardForm, setShowCardForm] = useState(false);

  const handleOpenForm = () => {
    setShowCardForm(true);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

  const handleCloseForm = () => {
    setShowCardForm(false);
  };
  return (
    <div className="h-full">
      <div className="container mx-auto px-8 py-4  h-full flex flex-col justify-between ">
        <header className="mb-4 h-16 flex justify-between items-center">
          <div className="flex items-center  ">
            <p className="mr-4 text-black font-bold">{getCurrentTime()}</p>
          </div>
          <div className="flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 305 242.5" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd">
  <g>
    <path className="fil0" d="M48 139l0 45c0 6 -5 10 -10 10l-28 0c-6 0 -10 -4 -10 -10l0 -31c0 -4 2 -7 5 -9l29 -14c6 -3 14 1 14 9z" />
    <path className="fil0" d="M133 96l0 88c0 6 -4 10 -9 10l-29 0c-5 0 -9 -4 -9 -10l0 -74c0 -4 2 -7 5 -9l29 -14c6 -3 13 1 13 9z" />
    <path className="fil0" d="M219 53l0 131c0 6 -4 10 -10 10l-28 0c-5 0 -10 -4 -10 -10l0 -117c0 -4 2 -7 6 -9l28 -14c7 -3 14 1 14 9z" />
    <path className="fil0" d="M305 10l0 174c0 6 -5 10 -10 10l-29 0c-5 0 -9 -4 -9 -10l0 -160c0 -4 2 -7 5 -9l29 -14c6 -3 14 1 14 9z" />
  </g>
  <text x="0" y="209" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Humantech</text>
  <text x="0" y="214" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text>
</svg> */}

            {/* <svg
              className="svg-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 192c-163 0-326 67.2-443 176.6-6.6 6-6.8 16.2-0.6 22.8l53.4 55.8c6.2 6.6 16.6 6.8 23.2 0.6 46.6-43.2 99.8-77.6 158.6-102 66-27.6 136.2-41.4 208.6-41.4s142.6 14 208.6 41.4c58.8 24.6 112 58.8 158.6 102 6.6 6.2 17 6 23.2-0.6l53.4-55.8c6.2-6.4 6-16.6-0.6-22.8C838 259.2 675 192 512 192z" />
              <path d="M226.4 555l57.2 56.6c6.2 6 16 6.4 22.4 0.6 56.6-50.2 129.2-77.8 205.8-77.8s149.2 27.4 205.8 77.8c6.4 5.8 16.2 5.4 22.4-0.6l57.2-56.6c6.6-6.6 6.4-17.2-0.6-23.4-75-67.8-175.2-109.2-285-109.2s-210 41.4-285 109.2c-6.6 6.2-6.8 16.8-0.2 23.4zM512 648.4c-46.8 0-89.2 19.6-118.8 51-6 6.4-5.8 16.2 0.4 22.4l106.8 105.4c6.4 6.4 16.8 6.4 23.2 0l106.8-105.4c6.2-6.2 6.4-16 0.4-22.4-29.6-31.2-72-51-118.8-51z" />
            </svg> */}

            {/* <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 55"
              enableBackground="new 0 0 100 44"
              xmlSpace="preserve"
            >
              <path d="M84,7H10c-1.654,0-3,1.346-3,3v24c0,1.654,1.346,3,3,3h74c1.654,0,3-1.346,3-3V10C87,8.346,85.654,7,84,7z" />
              <path d="M98,17c-1,0-4,0-4,0v-7c0-5.514-4.486-10-10-10H10C4.486,0,0,4.486,0,10v24c0,5.514,4.486,10,10,10h74 c5.514,0,10-4.486,10-10v-7c0,0,3,0,4,0s2-1,2-2.001C100,24,100,21,100,19C100,18,99,17,98,17z M90,34c0,3.309-2.691,6-6,6H10 c-3.309,0-6-2.691-6-6V10c0-3.309,2.691-6,6-6h74c3.309,0,6,2.691,6,6V34z" />
            </svg> */}
          </div>
        </header>
        <div className="">
          <h1 className="text-primary font-black text-30">Your Cards</h1>
          <p className="text-gray-dark font-normal">
            Add, edit or delete your cards any time
          </p>
        </div>
        <div>
          <div className="mb-32">
            <CardList />
          </div>

          {showCardForm && (
            <div className="absolute inset-0 bg-black bg-opacity-75 w-full h-full mb-16 ">
              <CardForm onClose={handleCloseForm} />
            </div>
          )}
        </div>

        <div>
          <Button onAddCard={handleOpenForm} />
        </div>
      </div>
    </div>
  );
}

export default App;
