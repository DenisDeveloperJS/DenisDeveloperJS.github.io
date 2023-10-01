import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { addGamesToCart } from "../../redux/actions/cart";

function GameItem({ data, addedCount }) {
	const [activeType, setActiveType] = useState(0);
	const [activeRentalDuration, setActiveRentalDuration] = useState(0);
	const types = ["PC", "PS4/5"];

	const dispatch = useDispatch();

	const changeActiveTypes = index => {
		setActiveType(index);
	};

	const changeActiveRentalDuration = index => {
		setActiveRentalDuration(index);
	};

	const onClickAddGames = () => {
		const obj = {
			id: data.id,
			name: data.name,
			imageUrl: data.imageUrl,
			price: data.price,
			rentalDuration: data.rentalDuration[activeRentalDuration],
			type: types[activeType],
		};
		dispatch(addGamesToCart(obj));

		const header = document.querySelector(".header");
		header.classList.remove("hide");
	};

	return (
		<div className="game-block">
			<img className="game-block__image" src={data.imageUrl} alt={data.name} />
			<h4 className="game-block__title">{data.name}</h4>
			<div className="game-block__selector">
				<ul>
					{data.types &&
						data.types.map((item, index) => {
							return (
								<li
									onClick={() => changeActiveTypes(index)}
									key={item}
									className={activeType === index ? "active" : ""}
								>
									{types[item]}
								</li>
							);
						})}
				</ul>
				<ul>
					{data.rentalDuration &&
						data.rentalDuration.map((item, index) => {
							return (
								<li
									onClick={() => changeActiveRentalDuration(index)}
									key={item}
									className={activeRentalDuration === index ? "active" : ""}
								>
									{item} дней.
								</li>
							);
						})}
				</ul>
			</div>
			<div className="game-block__bottom">
				<div className="game-block__price">от {data.price} $</div>
				<Button
					onClick={onClickAddGames}
					className="button button--outline button--add button--card"
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					<i>{addedCount || 0}</i>
				</Button>
			</div>
		</div>
	);
}

export default GameItem;
