import { combineReducers } from "redux";
import filtersReducer from "./filters";
import gamesReducer from "./games";
import cartReducer from "./cart";

const rootReducer = combineReducers({
	filters: filtersReducer,
	games: gamesReducer,
	cart: cartReducer,
});

export default rootReducer;
