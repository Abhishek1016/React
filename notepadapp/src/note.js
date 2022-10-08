import React from 'react'
import './note.css'
function Note()
{
    return(
        <div className='note'>
            <div>
            <textarea placeholder='type here..' className='note_text'/>
            </div>
            <div>
                <button onClick={()=>gettime}>Save</button>
            </div>
            <div>
                <p id='time'></p>
            </div>
        </div>
    )
}
function gettime(){
    let date=Date().toLocaleString();
    return(
        document.getElementById("time").innerHTML={date}
    )
}
export default Note;