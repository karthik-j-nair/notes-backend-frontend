const Note = ({title, description}) => {
  return (
    <div className="note h-fit p-2 rounded-lg text-zinc-50 bg-zinc-900">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Note
