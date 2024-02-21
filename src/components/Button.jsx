import "../styles/global.css"
import "../styles/index.css"



export default function Button({onAddCard}) {
  

   

    return (
        <div className="flex justify-center ">
            <button
                className="btn  mx-auto"
          onClick={onAddCard}
            >
                Add new card
            </button>

        
        </div>
    );
}