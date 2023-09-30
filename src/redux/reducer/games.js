const defaultState = {
	items: [],
	isLoaded: false,
};

const gamesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SET_GAMES":
			return { ...state, items: action.payload, isLoaded: true };
		case "SET_LOADED":
			return { ...state, isLoaded: action.payload };
		default:
			return state;
	}
};

export default gamesReducer;
