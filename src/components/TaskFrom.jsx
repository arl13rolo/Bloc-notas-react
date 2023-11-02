import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskFrom() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    createTask({title, description});
    setTitle('')
    setDescription('')
  }
    return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white text-center">Bloc de notas</h1>
      <form onSubmit={handleSubmit} className="bg-blue-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3 text-center">Crear tarea</h1>
        <input placeholder="Escribe tu tarea" 
        onChange={(e)=>{setTitle(e.target.value)}}
        className="bg-blue-600 p-3 w-full mb-2 text-orange-500"
        value={title}
        autoFocus
        />
        <textarea placeholder="Escribe la descripcion de la tarea"
        onChange={(e)=> setDescription(e.target.value)}
        className="bg-blue-600 p-3 w-full mb-2 text-orange-500"
       value={description}></textarea>
        <button className="bg-orange-500 px-3 py-1 text-white">
            Guardar
        </button>
      </form>
    </div>
  )
}

export default TaskFrom
