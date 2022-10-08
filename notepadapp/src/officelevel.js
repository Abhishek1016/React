import React from 'react'
import './officelevel.css'
import Note from'./note'
function Officelevel()
{
    return(
       <div className='officelevel'>
         <div className='officeleft'>
            <h1 className='officeleft_heading'>Office Note Section</h1>
         

        </div>
        <div className='officeright'>
             
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
            
        </div>
       </div>
    )
}
export default Officelevel;