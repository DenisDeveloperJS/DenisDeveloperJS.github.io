import { useDispatch, useSelector } from "react-redux";
import { Categories, GameBlocks, GameLoader, SortPopup } from "../components";

import { useCallback, useEffect } from "react";

import { fetchGames } from "../redux/actions/games";
import {
	setCategory,
	setSortBy as setSortByAction,
} from "../redux/actions/filters";

const categoryNames = [
	"БОЕВИКИ И ПРИКЛЮЧЕНИЯ",
	"ВОЖДЕНИЕ И ГОНКИ",
	"СПОРТ",
	"ТРИЛЛЕР / ХОРРОР",
	"ШУТЕРЫ",
	"РОЛЕВЫЕ ИГРЫ",
	"ЭКСКЛЮЗИВЫ",
];

const sortNames = [
	{ name: "популярности", type: "popular", order: "desc" },
	{ name: "цене", type: "price", order: "asc" },
	{ name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
	const dispatch = useDispatch();

	const setSortBy = index => {
		dispatch(setSortByAction(index, sortNames[index].order));
	};
	const setActiveCategory = useCallback(index => {
		dispatch(setCategory(index));
	}, []);
	const games = useSelector(({ games }) => {
		return games.items;
	});
	const isLoaded = useSelector(({ games }) => {
		return games.isLoaded;
	});
	const { category, sortBy } = useSelector(({ filters }) => {
		return filters;
	});

	useEffect(() => {
		const getData = () => {
			dispatch(fetchGames(sortNames[sortBy.type].type, category, sortBy.order));
		};

		getData();
	}, [category, sortBy]);

	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories
						items={categoryNames}
						setActiveCategory={setActiveCategory}
						activeCategory={category}
					/>
					<SortPopup
						filterCategories={sortNames}
						setSortBy={setSortBy}
						activeSortBy={sortBy.type}
					/>
				</div>

				<h2 className="content__title">Все игры</h2>
				{isLoaded ? (
					<GameBlocks games={games} isLoaded={isLoaded} />
				) : (
					Array(4)
						.fill(0)
						.map((item, i) => {
							return <GameLoader key={i} />;
						})
				)}
			</div>
		</div>
	);
}

export default Home;
