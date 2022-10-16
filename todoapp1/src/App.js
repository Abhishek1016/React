import React ,{useState} from 'react';
import './App.css';
import Form from './Form';
import Todolist from './Todolist';
function App() {
  const [inputtext,setinputtext]=useState("")
  const [todos,settodos]=useState([])
  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <Form id='form' todos={todos} settodos={settodos} inputtext={inputtext} setinputtext={setinputtext}/>
      <Todolist todos={todos}/>
    </div>
  );
}

export default App;
