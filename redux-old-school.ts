import { createStore } from "redux";

const initialState = {
    counter: {
        value: 0
    }
};

function reducer(state = initialState, action : any){
    switch(action.type){
        case "counter/increment": {
            return{
                ...state, //copia do estado atual 
                counter: {
                    value: state.counter.value + 1, //gerando novo estado | diferente de state.counter.value = state.counter.value + 1 
                }
            }
        }
        case "counter/incrementAmount": {
            return{
                ...state, //copia do estado atual 
                counter: {
                    value: state.counter.value + action.payload, //gerando novo estado | diferente de state.counter.value = state.counter.value + 1 
                }
            }
        }
        default:
            return state;
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);