import React from 'react';

const Form=({setinputtext,inputtext,todos,settodos})=>
{
   const inputtexthandler=(e)=>{
    setinputtext(e.target.value)
   }   
   const submittodohandler=(e)=>{
    e.preventDefault();
    settodos([
        ...todos,{text:inputtext}]);
        setinputtext("");
   };
    return(
        <form>
            <input value={inputtext}
             onChange={inputtexthandler} 
             type="text"/>
            <button onClick={submittodohandler} type='submit'>Submit</button>
        </form>
    )
}
export default Form;