import React from 'react'
import './personal.css'
import Note from'./note'
function Personallevel()
{
    return(
       <div className='personallevel'>
         <div className='personalleft'>
            <h1 className='personalleft_heading'>Personal Note Section</h1>
         

        </div>
        <div className='personalright'>
             
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
            
        </div>
       </div>
    )
}
export default Personallevel;