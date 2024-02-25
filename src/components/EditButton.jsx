 import editIcon from "../assets/images/edit-icon.svg"





const  EditButton = ({ selectedCardForEdit, cardItem }) => {

    return (
        <button onClick={() => selectedCardForEdit(cardItem)} className="flex justify-end">
                <img src={editIcon}  alt="Edit Icon" className="w-8 h-8" />
              </button>
    );
};

export default EditButton;
 