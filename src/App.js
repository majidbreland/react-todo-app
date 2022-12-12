import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Instructions from './Components/Instructions';
import ToDoItem from './Components/ToDoItem';



function App() {


  //todo items
  const [todos, setToDo] = useState([
    {
        id: 1,
        text: "Make a Todo list",
        completed: true
    },
    {
        id: 2,
        text: "Learn react",
        completed: true
    },
    {
        id: 3,
        text: "Go to the mall",
        completed: false
    },
    {
        id: 4,
        text: "Eat healthy",
        completed: false
    }
  ]);


  //tempstates
  const [newItem,setNewItem] = useState('');
  const [updateItem,setUpdateItem] = useState('');

  //functions to control app
  const addTask = () => {
    if (newItem) {
      let newId = todos.length + 1;
      let newTaskValue = {id: newId, text:newItem, completed: false};
      setToDo([...todos, newTaskValue]);
      setNewItem('');
    }
    
  }

  const deleteTask = (id) => { 
    let newList = todos.filter(item => item.id !== id);
    setToDo(newList);
  }

  const markDone = (id) => {
    let markTaskDone = todos.map(item => {
      if(item.id === id){
        return ({...item,completed: !item.completed})
      }
      return item
    }) 
    setToDo(markTaskDone);
  }

  const updateTask = (id) => {
    let updateT = todos.map(item => {
      if(item.id === id){
        return ({...item,text: updateItem})
      }
      return item
    }) 
    setToDo(updateT);
    setUpdateItem(updateItem);
  }

  const todoDat = todos.map(item => <ToDoItem key={item.id} item={item} deleteTask={deleteTask} markDone={markDone} updateTask={updateTask}></ToDoItem>)


  return (
    <div className="App">
      <Header></Header>
      <Instructions></Instructions>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="input-group add-task">
              <button onClick={addTask} className='btn btn-primary'>Add Task</button>
              <input className="form-control taskinput" type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
            </div>
          </div>
        </div>
      
      {todoDat}
      
      {/* {todoS && todoS.length ? '' : "No Items..."} */}
      </div>
      
        
      <Footer></Footer>
    </div>
  );
}

export default App;
