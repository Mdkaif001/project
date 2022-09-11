import React from "react";

import DeleteIcon from '@mui/icons-material/Delete';
const MainNote =(props)=>{
    const removeItem =()=>{
        props.removeNote(props.id);
    }
    return(
        <>
            <div className="note">
             <h2>{props.title} </h2>
             <p>{props.content}</p>
             <button onClick={removeItem}>
                <DeleteIcon/>
             </button>  
            </div>
        </>
    )
}
export default MainNote;