import { combineReducers } from "redux";
import { upAndDown, showData, xandy } from "./reducers"
const RootReducers = combineReducers({ upAndDown, showData, xandy })
export default RootReducers;    