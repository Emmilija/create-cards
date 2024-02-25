 import editIcon from "../assets/images/edit-icon.svg"





const  EditButton = ({ selectedCardForEdit, item }) => {




    return (
        <button onClick={() => {selectedCardForEdit(item)}} className="flex justify-end">
                <img src={editIcon}  alt="Edit Icon" className="w-8 h-8" />
              </button>
    );
};

export default EditButton;
 