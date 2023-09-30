const defaultState = {
	category: null,
	sortBy: {
		type: 0,
		order: "desc",
	},
};

const filtersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SET_SORT_BY":
			return {
				...state,
				sortBy: {
					type: action.payload.type,
					order: action.payload.order,
				},
			};
		case "SET_CATEGORY":
			return { ...state, category: action.index };
		default:
			return state;
	}
};

export default filtersReducer;
