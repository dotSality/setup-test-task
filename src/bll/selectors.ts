import { RootStateType } from "./store";

export const getState = (state: RootStateType) => state.app;
export const getTextValues = (state: RootStateType) => {
  const { post, title } = state.app;
  return { title, post };
};
export const getHeaderValues = (state: RootStateType) => {
  const { header, isHeaderOn } = state.app;
  return { header, isHeaderOn };
};
export const getIsImageOn = (state: RootStateType) => state.app.isImageOn;
