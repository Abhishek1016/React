

// const Counterreducer=(state=0,action)=>
// {
//     switch(action.type)
//     {
//         case "INCREMENT":
//           return state+action.value;

//         case "DECREMENT":
//             return state-action.value;

//         default:
//             return state;

//     }
// }
// export default Counterreducer;
let input=window.prompt("Enter number you want to start");
const Counterreducer=(state=0,action)=>
{
    switch(action.type)
    {
        case "INCREMENT":
          return state=state + 1;

        case "DECREMENT":
            return state=state - 1;

        default:
            return state;

    }
}
export default Counterreducer;