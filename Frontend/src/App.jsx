import { useState } from "react";
import Note from "./components/Note";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  axios.get('http://localhost:3000/api/notes')
  .then((res)=>{
    setNotes(res.data.notes)
  })

  return <div className="notes h-screen bg-zinc-800 p-4 flex flex-wrap gap-3 content-start">
    {
      notes.map((note, idx) => <Note key={idx} title={note.title} description={note.description}/>)
    }
  </div>;
}

export default App;
