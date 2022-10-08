// import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react'


function App() {
  // const[counter,setcounter]=useState(0);
  // const[name,setname]=useState("")
  // const increment=()=>
  // {
  //   setcounter(counter+1);
  // }

  // const decrement=()=>
  // {
  //   setcounter(counter-1);
  // }
  const[details,setdetails]=useState({counter:0,name:""})
  const increment=()=>
  {
    setdetails((prev)=>
    (
      {
        ...prev,
        counter:prev.counter+1
      }
      )
    )
  };
  const decrement=()=>
  {
    setdetails((prev)=>
    (
      {
        ...prev,
        counter:prev.counter-1
      }
      )
    )
  };
  // const naming=()=>
  // {
  //   setdetails((prev)=>
  //   ({
  //     ...prev,
  //     name:prev.name
  //   }))
  // };

  return (
    <div className="App">
    {/* <input type="text" onChange={e=>setname(e.target.value)}/> */}
     <h1> {details.counter} times</h1>
     {/* <h1>{name} has clicked {counter} times</h1> */}
     <button onClick={increment}>click for increment</button>
     <button onClick={decrement}>click for decrement</button>
    </div>
  );
}

export default App;
