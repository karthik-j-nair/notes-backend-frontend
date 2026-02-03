const AddNoteForm = ({
  handleSubmit,
  noteTitle,
  setNoteTitle,
  noteDesc,
  setNoteDesc,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="add-note-form flex flex-col items-center gap-2"
    >
      <input
        required
        value={noteTitle}
        onChange={(dets) => {
          setNoteTitle(dets.target.value);
        }}
        className="text-white px-2 py-1 bg-zinc-700 rounded outline-none"
        type="text"
        placeholder="Enter Title"
      />
      <input
        required
        value={noteDesc}
        onChange={(dets) => {
          setNoteDesc(dets.target.value);
        }}
        className="text-white px-2 py-1 bg-zinc-700 rounded outline-none"
        type="text"
        placeholder="Enter Description"
      />
      <button className="px-2 py-1 font-semibold rounded-lg bg-emerald-900 text-white cursor-pointer transition-all  ease-in-out active:scale-97 outline-none">
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
