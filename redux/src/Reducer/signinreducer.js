const Signinreducer=(state="SingIn",action)=>{

    switch(action.type)
    {
        case "SIGNIN":
            return state="SignedIn";

        default:
            return state;
    }
}
export default Signinreducer;