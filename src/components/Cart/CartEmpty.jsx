import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImage from "../../assets/img/empty-cart.svg";

const CartEmpty = () => {
	return (
		<div className="cart cart--empty">
			<h2>Корзина пустая</h2>
			<p>
				Вероятней всего, вы не выбрали игру.
				<br />
				Для того, чтобы выбрать игру, перейдите на главную страницу.
			</p>
			<img src={cartEmptyImage} alt="Empty cart" />
			<Link to="/" className="button button--black">
				<span>Вернуться назад</span>
			</Link>
		</div>
	);
};

export default CartEmpty;
