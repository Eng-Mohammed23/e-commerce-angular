import { createReducer, on } from "@ngrx/store";
import { languageAction } from "./language.action";
const intialState=localStorage.getItem('lang')?localStorage.getItem('lang'):"en"
//localStorage.getItem('lang')?localStorage.getItem('lang'):"en"

export const languageReducer = createReducer(
    intialState,
    on(languageAction,(state,action)=>action.lang)
)