import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name: 'login', 
    initialState: {
        username: '',
        email: ''
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload
        }
    }
})

export const {setUsername, setEmail} = loginSlice.actions;
export default loginSlice.reducer;