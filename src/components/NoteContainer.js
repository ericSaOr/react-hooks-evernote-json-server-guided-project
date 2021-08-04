import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  
  const [notes, setNotes] = useState([]);
  const [displayNotes, setDisplayNotes] = useState([]);
  const [contents, setContents] = useState(null);
  const [newNotes, setNewNotes] = useState({});
  // const [isClicked, setClicked] = useState(false);
  // const [search , setSearch] = useState('');
  useEffect(()=>{
    const url = "http://localhost:3000/notes";
    fetch(url).then(res => res.json()).then(everData =>{setNotes(everData)
    setDisplayNotes(everData)
    })
  },[])

  function getContent(note){
    setContents(note);
    }

    function newNoteFunction (newNote){
      setNewNotes(newNote);
    }
    //filter through notes by title.
    //.toLowerCase so it's not case sensitive.
    //.includes passing the search parameter.
    //setting the filtered notes to state.
    const searchNotes = (search)=> {
      let filteredNotes = notes.filter((note) =>note.title.toLowerCase().includes(search));
      setDisplayNotes(filteredNotes);
    }


    return (
    <>
      <Search setSearch = {searchNotes} />
      <div className="container">
        <Sidebar notes = {displayNotes} 
       getContent = {getContent}
       note = {contents}
        
        />
        <Content note = {contents} newNote = {newNoteFunction}/>
      </div>
    </>
  );
}

export default NoteContainer;
