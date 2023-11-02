import TaskList from './components/TaskList'
import TaskFrom from './components/TaskFrom'


function App(){
  return (<main className='bg-blue-500 h-screen'>
    <div className='container mx-auto p-10'>
    <TaskFrom/>
    <TaskList/>
    </div>
    
    </main>)
 
}

export default App
