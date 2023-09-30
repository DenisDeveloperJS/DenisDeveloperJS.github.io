import axios from "axios";

export const fetchGames = (sortBy, category, order) => dispatch => {
	dispatch(setLoaded(false));
	axios
		.get(
			`http://localhost:3001/games?${
				category === null ? "" : `category=${category}`
			}&_sort=${sortBy}&_order=${order}`
		)
		.then(res => {
			const data = res.data;

			dispatch(setGames(data));
		});
};

const setGames = items => ({
	type: "SET_GAMES",
	payload: items,
});

const setLoaded = bool => ({
	type: "SET_LOADED",
	payload: bool,
});

export { setGames, setLoaded };
