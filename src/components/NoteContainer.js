import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  
  const [notes, setNotes] = useState([]);
  const [displayNotes, setDisplayNotes] = useState([]);
  const [displayNote, setDisplayNote] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [search, setSearch] = useState([])
  const [note, setNote] = useState({});
 
  // const [isClicked, setClicked] = useState(false);
  // const [search , setSearch] = useState('');
  useEffect(()=>{
    const url = "http://localhost:3000/notes";
    fetch(url).then(res => res.json()).then(everData =>{setNotes(everData)
      setDisplayNotes(everData)
    })
  },[])

  //setting a state of a single note.
  function getContent(note){
    setNote(note);
    setDisplayNote(true);
    
    }


    // console.log(getContent)
    //filter through notes by title.
    //.toLowerCase so it's not case sensitive.
    //.includes passing the search parameter.
    //setting the filtered notes to state.
    const searchNotes = (search)=> {
      let filteredNotes = notes.filter((note) =>note.title.toLowerCase().includes(search));
      setNotes(filteredNotes);
    }

// console.log(contents)
// console.log(notes)
    return (
    <>
      <Search searchNotes = {searchNotes} />
      <div className="container">
        <Sidebar notes = {notes} 
       getContent = {getContent} //function where state is set to one note.
        //This is one note.
       setNotes = {setNotes} 
        
        />
        <Content note = {note} setNotes = {setNotes} displayNote = {displayNote} displayEdit={displayEdit} setDisplayEdit={setDisplayEdit} setDisplayNote={setDisplayNote}/>
      </div>
    </>
  );
}

export default NoteContainer;
