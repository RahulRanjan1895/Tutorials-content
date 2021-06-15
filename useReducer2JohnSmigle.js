//App.js

import React, { useState, useReducer } from 'react';
//import Modal from './Modal';
//import { data } from './data';
// reducer function
import { reducer } from './reducer';

const defaultState = { people: [] };

const ACTIONs={
  
};

const App = () => {
  console.log(reducer); 

  //console.log(defaultState)
  const [name, setName] =  useState ('');

  const [state,dispatch] = useReducer (reducer,defaultState);
  //console.log(state.people);

const handleSubmit = (event) => {
event.preventDefault();
if(name){
  const newItem = {id: new Date().getTime().toString(),name};
  dispatch({type:'ADD_ITEM',payload:newItem});
  setName('');
        }  

                            };

  return(
    <>
    <form style={{textAlign : 'center'}}
     onSubmit={handleSubmit}>
      <h1>Welcome to reducer</h1>
      <div>
        <input style={{border: '2rem black'}} value={name} onChange={(e) => setName(e.target.value)} />
      </div><div><h1></h1>
      <button type='submit'>Add Item </button></div>
    </form><h1></h1>
    
    {state.people.map((person)=>  
      {
        return (
          <div style={{textAlign: 'center'}}
           key = {person.id}> <h4>{person.name}</h4></div>
        )
      }
      )}
    </>
  ) 
  
};

export default App;

//reducers.js

export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
 
    };
  }

 
 

};
