import { createStore } from "redux";
import dialogReducer from "./dialogReducer";
export type RootState = ReturnType<typeof store.getState>;
declare module "react-redux" {
    interface DefaultRootState extends RootState {}
}
export const store = createStore(dialogReducer);

export default store;
