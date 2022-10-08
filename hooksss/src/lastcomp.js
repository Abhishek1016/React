import React,{useContext} from 'react'
import { Hellocontext } from './Demousecontext'

function Last()
{
    const mainname=useContext(Hellocontext);
    return(
        <div>
            <h1> Hello {mainname}</h1>
        </div>
    )
}
export default Last;