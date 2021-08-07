import { combineReducers } from "redux";
import {allCards, currentDrag} from "./Cards";

export default combineReducers({
allCards,
currentDrag
});
