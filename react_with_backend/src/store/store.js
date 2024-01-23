import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit'

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
// );

const middleware = [thunk];

export default configureStore({
  reducer: rootReducer,
  middleware: middleware
})