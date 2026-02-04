import { useEffect, useState } from "react";
import Note from "./components/Note";
import axios from "axios";
import AddNoteForm from "./components/AddNoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");
  const [editNoteId, setEditNoteId] = useState(null);

  function fetchNotesData() {
    axios.get("https://notes-backend-frontend.onrender.com/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  function clearForm() {
    setEditNoteId(null);
    setNoteDesc("");
    setNoteTitle("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editNoteId) {
      axios
        .patch("https://notes-backend-frontend.onrender.com/api/notes/" + editNoteId, {
          description: noteDesc,
        })
        .then((res) => {
          console.log(res.data);
          fetchNotesData();
          clearForm();
        });
    } else {
      axios
        .post("https://notes-backend-frontend.onrender.com/api/notes", {
          title: noteTitle,
          description: noteDesc,
        })
        .then((res) => {
          console.log(res.data);

          fetchNotesData();
          clearForm();
        });
    }
  }

  function handleDeleteNote(noteId) {
    axios.delete("https://notes-backend-frontend.onrender.com/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNotesData();
    });
  }

  function handleEditNote(noteTitle, noteDesc, noteId) {
    setNoteTitle(noteTitle);
    setNoteDesc(noteDesc);
    setEditNoteId(noteId);
  }

  useEffect(() => {
    fetchNotesData();
  }, []);

  return (
    <main className="h-screen w-screen bg-zinc-800 p-4 flex flex-col items-center gap-4">
      <AddNoteForm
        handleSubmit={handleSubmit}
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        noteDesc={noteDesc}
        setNoteDesc={setNoteDesc}
      />
      <div className="notes h-[85%] w-[90%] flex flex-wrap gap-3 content-start justify-center overflow-auto">
        {notes.map((note, idx) => (
          <Note
            key={idx}
            title={note.title}
            description={note.description}
            id={note._id}
            handleDeleteNote={handleDeleteNote}
            handleEditNote={handleEditNote}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
