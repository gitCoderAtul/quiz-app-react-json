import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    answerValues:[]
  }


 
const answerSlice = createSlice({
    name:'answers',
    initialState,
    reducers: {
        answerSheet: (state) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
         console.log('answer sheet');
        },
        answerStore: (state,action) => {
          console.log('state',state);
          console.log('action',action);
         console.log('answer store');

         state.answerValues.push(action.payload)
        },
         
      },

})

// Action creators are generated for each case reducer function
export const { answerSheet,answerStore } = answerSlice.actions

export default answerSlice.reducer