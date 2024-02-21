import Button from "./components/Button";
import "./styles/global.css"
import "./styles/index.css"
import CardList from "./components/CardList";


function App() {
  // Function to get current time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false });
  };

  return (
    <div className="h-full">
    <div className="container mx-auto px-8 py-4  h-full flex flex-col justify-between ">
      <header className="mb-16 flex justify-between items-center">
        <div className="flex items-center ">
          <p className="mr-4 text-black font-bold">{getCurrentTime()}</p>
     
        </div>
        <div className="flex items-center">
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </header>
      <div className="">
        <h1 className="text-primary font-black text-30">Your Cards</h1>
        <p className="text-gray-dark font-normal">Add, edit or delete your cards any time</p>
      </div>
      <div className="mb-32">
      <CardList />
     
      </div>
  
      <div > 
          <Button />
          
        </div>
    </div>
    </div>
  );
}

export default App;
