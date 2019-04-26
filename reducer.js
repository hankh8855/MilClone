import { applyMiddleware } from "redux";

//redux ducks

//Import
//Actions
const A = 'a';
const B = 'b';
//Action Creators
function a() {
  return { type: A };
}
function b() {
  return { type: B };
}
//Reducer

const initialState ={
  isA: false,
  isB: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case A: return applyA(state);
    case B: return applyA(state);
    // do reducer stuff
    default: return state;
  }
}
//Reducer Functions
function applyA(state){
  return {
    ...state,
    isA: true
  }
}
function applyB(state){
  return {
    ...state,
    isB: true
  }
}
//Export Action Creators
export const actionCreators ={
  a,
  b
}
//Export Reducer
export default reducer;
