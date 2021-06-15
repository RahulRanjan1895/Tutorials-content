//App.js

import React, { useState, useReducer } from 'react';
//import Modal from './Modal';
//import { data } from './data';
// reducer function
import { reducer } from './reducer';

const defaultState = { people: [] }; 

export const ACTIONS = {
  ADD_ITEM:'ADD_ITEM1' 
};

const App = () => {
  //console.log(reducer); 

  //console.log(defaultState)
  const [name, setName] =  useState ('');

  const [state,dispatch] = useReducer (reducer,defaultState);
  //console.log(state.people);

const handleSubmit = (event) => {
event.preventDefault();
if(name){
  const newItem = {id: new Date().getTime().toString(),name};
  dispatch({type: ACTIONS.ADD_ITEM,payload:newItem});
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
 
 //reducer.js
 
 import React from 'react';

import { ACTIONS } from './App.js';
 
 


export  const reducer = (state, action) => { 
  console.log("hi");   
console.log( ACTIONS) ;  
  const newPeople = [...state.people, action.payload];
  switch(action.type){
    case ACTIONS.ADD_ITEM:
        
        return {
          
          ...state,
          people: newPeople,
     
        };
        default: {return state};
  }
 
 

};
