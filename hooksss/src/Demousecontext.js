import React,{createContext} from 'react'
import Middle from './middlecomp'

export const Hellocontext=createContext();

function Demo2()
{
    const name="Abhishek N";
    return(
    <div>
            <Hellocontext.Provider value={name}>
            <h1>Hello {name}</h1>
            <Middle/>
            </Hellocontext.Provider>
        </div>
    )
}
export default Demo2;