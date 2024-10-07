import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGif } from "../../types/gif";

// Define a type for the slice state
interface IInitialState {
  gif: IGif[];
}

// Define the initial state using that type
const initialState: IInitialState = {
  gif: [],
};

const gifSlice = createSlice({
  name: "gifState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGif: (state, action: PayloadAction<IGif[]>) => {
      state.gif = action.payload;
    },
    resetGif: (state) => {
      state.gif = [];
    },
  },
});

export const { setGif, resetGif } = gifSlice.actions;
export default gifSlice.reducer
