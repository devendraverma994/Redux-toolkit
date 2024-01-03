import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    stateName: "Demo",
    count: 0
  },

  reducers:{
    handleState:(state, action) => {
      state.stateName = action.payload;
    },

    increment:(state, action) => {  
      state.count = state.count + 1;
    },

    decrement:(state, action) => {
      state.count = state.count - 1;
    },

    reset:(state, action) => {
      state.count = 0;
    }
  }
})

export const { handleState, increment, decrement, reset } = userSlice.actions;
export default userSlice.reducer;
