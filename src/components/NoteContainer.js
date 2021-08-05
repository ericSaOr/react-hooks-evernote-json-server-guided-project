import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  
  const [notes, setNotes] = useState([]);
  const [displayNote, setDisplayNote] = useState(false);
  const [search, setSearch] = useState('')
  const [displayEdit, setDisplayEdit] = useState(false);
  const [note, setNote] = useState({});
 
  
  useEffect(()=>{
    const url = "http://localhost:3000/notes";
    fetch(url).then(res => res.json()).then(everData =>{setNotes(everData)
    })
  },[])

  //setting a state of a single note.
  function getContent(note){
    setNote(note);
    setDisplayNote(true);
    
    }

    const searchNotes = (searchNote)=> setSearch(searchNote);
    
    
  
      
  function potato (){
    if (search.length > 0){
      return notes.filter(note =>note.title.toLowerCase().includes(search));
    }

    return notes;

  }
    

// console.log(contents)
// console.log(notes)

    return (
    <>
      <Search searchNotes = {searchNotes}/>
      <div className="container">
        <Sidebar notes = {potato()} 
       getContent = {getContent} //function where state is set to one note.
        //This is one note.
       setNotes = {setNotes} 
       setDisplayEdit= {setDisplayEdit}


        
        />
        <Content notes = {notes} note = {note} setNotes = {setNotes} displayNote = {displayNote} displayEdit={displayEdit} setDisplayEdit={setDisplayEdit}  getContent={getContent}/>
      </div>
    </>
  );
    }

export default NoteContainer;
