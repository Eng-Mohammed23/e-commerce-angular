import { createReducer, on } from "@ngrx/store";
import { decreaseCounter, increaseCounter } from "./counter.action";

const initial=0
export const counterReducer = createReducer(
    initial,
    on(increaseCounter,(state)=>state+1),
    on(decreaseCounter,(state)=>state-1)
)