import "../styles/global.css"
import "../styles/index.css"



export default function Button({children, type, btnDisabled, onAddCard, closeForm}) {
  

   

    return (
        <div className="flex justify-center ">
            <button
            type={type} disabled={btnDisabled}
                className={`btn ${btnDisabled ? 'btn-disabled' : ''} mx-auto`}
          onClick={onAddCard}
            >
                
                {children}
            </button>

        
        </div>
    );
}