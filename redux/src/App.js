import './App.css';
import {Increment,Decrement,} from "./Action/counter";
import { Change } from './Action/counter';
import {useSelector,useDispatch} from "react-redux";

function App() {
 const dispatch=useDispatch();
 const counter=useSelector((state)=>state.counter)
 const signin =useSelector((state)=>state.signin)

 const cha=()=>
 {
  dispatch(Change())
 }
 const inc=()=>
 {
  dispatch(Increment())
 }
 const dec=()=>
 {
  dispatch(Decrement())
 }
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
      <h1 > {signin}</h1>
      <button onClick={cha}>change</button>
    </div>
  );
}

export default App;
