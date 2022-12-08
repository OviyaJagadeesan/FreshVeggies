import React, { useState } from "react";
const initial = [];
const quantity = 1;

const Reducer = (state = initial, action) => {
  let { type, payload } = action;
  let flag = true;
  switch (type) {
    case "additem": {
      if (state.length === 0) {
        payload = { ...payload, quantity };
        console.log("if",payload);
        state.push(payload);
      } else {
        state = state.filter((item) => {
          if (item.name === payload.name) {
            flag = false;
            item.quantity = item.quantity + 1;
            return item;
          }
          return item;
        });
        if (flag) {
          payload = { ...payload, quantity };
          state.push(payload);
        }
      }
      console.log(state);
      return state;
    }
    case "removeitem":{
      state=state.filter((item)=>{
          if(item.name===payload.name){
            item.quantity=item.quantity-1;
            if(item.quantity>0){
              return item;
            }
          }
          else{
            return item;
          }
      });
      return state;
    }
    case "deleteitem":{
      state=state.filter((item)=>{
        if(item.name===payload.name){
          item.quantity=item.quantity-1;
        }
        else{
          return item;
        }
    });
    return state;
    }
    default:
      return state
  }
};

export default Reducer;
