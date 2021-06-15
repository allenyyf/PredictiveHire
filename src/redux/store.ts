import { createStore } from "redux";
import dialogReducer from "./dialogReducer";
export type RootState = ReturnType<typeof store.getState>;

export const store = createStore(dialogReducer);

export default store;
