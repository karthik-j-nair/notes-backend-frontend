const Note = ({ title, description, id, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note h-fit p-2 rounded-lg text-zinc-50 bg-zinc-900 flex flex-col gap-1 items-center">
      <h2 className="text-lg uppercase">{title}</h2>
      <p>{description}</p>
      <div className="bottons flex gap-1">
        <button
          className="bg-red-900 rounded px-2 cursor-pointer"
          onClick={() => {
            handleDeleteNote(id);
          }}
        >
          Delete
        </button>

        <button onClick={()=>{handleEditNote(title, description, id)}} className="bg-amber-600 rounded px-2 cursor-pointer">Edit</button>
      </div>
    </div>
  );
};

export default Note;
