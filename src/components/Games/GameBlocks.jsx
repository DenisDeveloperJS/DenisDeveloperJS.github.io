import React from "react";
import GameItem from "./GameItem";
import { useSelector } from "react-redux";

function GameBlocks({ games }) {
	const cartItems = useSelector(({ cart }) => {
		return cart.items;
	});

	return (
		<>
			{games.map(item => {
				return (
					<GameItem
						data={item}
						key={item.id}
						addedCount={cartItems[item.id]?.items?.length}
					/>
				);
			})}
		</>
	);
}

export default GameBlocks;
