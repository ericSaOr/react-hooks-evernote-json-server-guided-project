import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [contents, setContents] = useState([]);
  useEffect(()=>{
    const url = "http://localhost:3000/notes";
    fetch(url).then(res => res.json()).then(everData =>setNotes(everData))
  },[])

  function getContent(title){
    const contentsFilter = notes.filter(content => 
     content.title === title);

      setContents(contentsFilter)
    }

  console.log(notes)

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes = {notes} 
       getContent = {getContent}
        
        />
        <Content notes = {notes}
        contents = {contents}/>
      </div>
    </>
  );
}

export default NoteContainer;
