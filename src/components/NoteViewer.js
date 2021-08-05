import React from "react";

function NoteViewer({title, body, setDisplayEdit, }) {
  
  function handleButton (){
   setDisplayEdit(true)
    
  }
  return (
    <>

      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleButton}>Edit</button>
     
    </>
  );
}

export default NoteViewer;
