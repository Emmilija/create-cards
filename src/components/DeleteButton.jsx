import { useContext } from "react";
import deleteIcon from "../assets/images/delete.svg"
import { CardContext } from "../context/CardContext";
import '../styles/index.css'


const DeleteButton = ({item}) => {

  const {deleteCard} = useContext(CardContext)


    return (
        <button className="delete" onClick={() => {deleteCard(item.id)}} >
                <img src={deleteIcon}  alt="Delete Icon" className="delete-btn" />
              </button>
    );
};

export default DeleteButton;