const defaultState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
};

const getTotalPrice = arr => {
	const result = arr.reduce((accu, nextItem) => accu + nextItem.price, 0);

	return result;
};

const cartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_GAMES_CART": {
			const currentGamesItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload];

			const newObj = {
				...state.items,
				[action.payload.id]: {
					items: currentGamesItems,
					totalPrice: getTotalPrice(currentGamesItems),
				},
			};
			const items = Object.values(newObj).map(obj => obj.items);
			const allGames = [].concat.apply([], items);

			return {
				...state,
				items: newObj,
				totalCount: allGames.length,
				totalPrice: getTotalPrice(allGames),
			};
		}
		case "REMOVE_CART_ITEM": {
			const newItems = JSON.parse(JSON.stringify({ ...state.items }));
			const currentGamesPrice = newItems[action.payload].totalPrice;
			const currentTotalCount = newItems[action.payload].items.length;
			delete newItems[action.payload];

			return {
				...state,
				items: newItems,
				totalCount: state.totalCount - currentTotalCount,
				totalPrice: state.totalPrice - currentGamesPrice,
			};
		}
		case "PLUS_CART_ITEM": {
			const newItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0],
			];

			const newState = {
				...state,
				items: {
					...state.items,
					[action.payload]: {
						items: newItems,
						totalPrice: getTotalPrice(newItems),
					},
				},
				totalPrice:
					state.totalPrice + state.items[action.payload].items[0].price,
				totalCount: state.totalCount + 1,
			};

			return newState;
		}
		case "MINUS_CART_ITEM": {
			const currentItems = state.items[action.payload].items;
			let newItems;
			let newState;

			if (currentItems.length > 1) {
				newItems = state.items[action.payload].items.slice(1);

				newState = {
					...state,
					items: {
						...state.items,
						[action.payload]: {
							items: newItems,
							totalPrice: getTotalPrice(newItems),
							totalCount: state.totalCount + 1,
						},
					},
					totalPrice:
						state.totalPrice - state.items[action.payload].items[0].price,
					totalCount: state.totalCount - 1,
				};
			} else {
				return {
					...state,
				};
			}

			return newState;
		}
		case "CLEAR_CART": {
			return { items: {}, totalPrice: 0, totalCount: 0 };
		}

		default:
			return state;
	}
};

export default cartReducer;
