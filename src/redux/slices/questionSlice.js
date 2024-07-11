import { createSlice, current } from "@reduxjs/toolkit"
import { act } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    value : 0,
    length:10
}

const questionsSlice = createSlice({
name : 'question',
initialState,
reducers :{
    allQuestion:()=>{
        console.log("allQuestion");
    },
    currentQuestion: (state, action)=>{
        state.value;
        console.log("currentQuestion");
    },
    nextQuestion: (state, action)=>{
        console.log("nextQuestion");
        console.log(state );
        console.log( state.value );
        // console.log( action );
        // console.log( action.payload);
        
        if(state.value<=10){
           
            state.value += 1

            // const navigate = useNavigate()
            // navigate('/ResultComp')
            
        }
        else if(state.value>10){
            // navigate('/')
                const navigate = useNavigate()
                 navigate('/ResultComp')

        }
        
    },

}

})

export const { allQuestion,currentQuestion,nextQuestion } = questionsSlice.actions
export default questionsSlice.reducer

