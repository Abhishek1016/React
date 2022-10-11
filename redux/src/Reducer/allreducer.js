import Counterreducer from "./counterreducer";
import Signinreducer from "./signinreducer";
import {combineReducers} from "redux";

export const Allreducer=combineReducers
({
    counter:Counterreducer,
    signin:Signinreducer
})