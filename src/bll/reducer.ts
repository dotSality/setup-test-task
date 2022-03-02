import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DataType } from "../utils/ls-funcs";

const slice = createSlice({
  name: "app",
  initialState: {
    title: "",
    post: "",
    isHeaderOn: false,
    header: "",
    isImageOn: false,
    image: null as string | null,
  } as DataType,
  reducers: {
    toggleIsHeaderOn(state, action: PayloadAction<boolean>) {
      state.isHeaderOn = !action.payload;
    },
    toggleIsImageOn(state, action: PayloadAction<boolean>) {
      state.isImageOn = !action.payload;
    },
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    changePost(state, action: PayloadAction<string>) {
      state.post = action.payload;
    },
    changeHeader(state, action: PayloadAction<string>) {
      state.header = action.payload;
    },
    changeImage(state, action: PayloadAction<string | null>) {
      state.image = action.payload;
    },
    setInitState(state, action: PayloadAction<DataType>) {
      return action.payload;
    },
  },
});

export const {
  changeHeader,
  changeImage,
  changePost,
  toggleIsImageOn,
  toggleIsHeaderOn,
  changeTitle,
  setInitState,
} = slice.actions;
export const appReducer = slice.reducer;
