import { useContext } from "react";
import editIcon from "../assets/images/edit-icon.svg"
import { CardContext } from "../context/CardContext";



const  EditButton = ({item}) => {

  const {openForm} = useContext(CardContext)

    const handleEditClick = () => {
        openForm(item)
     
   
 
    };
    return (
        <button className="edit" onClick={handleEditClick} >
                <img src={editIcon}  alt="Edit Icon" className="" />
              </button>
    );
};

export default EditButton;