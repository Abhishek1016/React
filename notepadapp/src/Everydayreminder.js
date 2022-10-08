import React from 'react'
import './Everydayreminder.css'
import Note from'./note'
function Everyday()
{
    return(
       <div className='everydaylevel'>
         <div className='everydayleft'>
            <h1 className='everydayleft-heading'>Everyday Note Section</h1>
        </div>
        <div className='everyright'>
             
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
            
        </div>
       </div>
    )
}
export default Everyday;