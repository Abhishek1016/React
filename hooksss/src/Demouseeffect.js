import react,{useEffect,useState} from 'react'

function Demo()
{
   const[counter,setcounter]=useState(0);
   const[countbyten,setcountbyten]=useState(10)
//    useEffect(()=>{
//     document.title=counter+"times clicked";
//    })
//    useEffect(()=>{
//     document.title=counter+"times clicked";
//    },[])
   useEffect(()=>{
    document.title=countbyten+"times clicked";
   },[countbyten])
  const increment=()=>
  {
    setcounter(counter+1);
  }

  const decrement=()=>
  {
    setcounter(counter-1);
  }
  return(
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>click for increment</button>
     <button onClick={decrement}>click for decrement</button>
     <h1>{countbyten}</h1>
     <button onClick={()=>setcountbyten(countbyten+10)}>Increment by 10</button>
     <button onClick={()=>setcountbyten(countbyten-10)}>Decrement by 10</button>
    </div>
  )
}
export default Demo;