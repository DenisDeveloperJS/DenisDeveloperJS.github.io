import React from "react";
import YouMoney from "../assets/img/payments/YouMoney.svg";
import MasterCard from "../assets/img/payments/MasterCard.svg";
import Qiwi from "../assets/img/payments/Qiwi.svg";
import Visa from "../assets/img/payments/Visa.svg";
import Mir from "../assets/img/payments/MIR.svg";
import AlphaBank from "../assets/img/payments/AlphaBank.svg";
import SPB from "../assets/img/payments/SPB.svg";
import Tinkoff from "../assets/img/payments/Tinkoff.svg";

function Footer() {
	return (
		<div className="footer container">
			<div className="footer__content">
				<div className="footer__top">
					<div className="footer__collumn">
						<div className="footer__title">КАТЕГОРИИ</div>
						<ul className="footer__list">
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Боевики и приключения
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Вождение и гонки
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Единоборства
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Платформеры
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Ролевые игры
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Спорт
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Стратегии
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Триллеры
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Шутеры
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__collumn">
						<div className="footer__title">КАК АРЕНДОВАТЬ</div>
						<ul className="footer__list">
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Что такое П1|П2|П3 активация
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Инструкция П1 (PS4/PS5)
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Инструкция П2 (PS4/PS5)
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Инструкция П3 (PS4/PS5)
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__collumn">
						<div className="footer__title">ИНФОРМАЦИЯ</div>
						<ul className="footer__list">
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Часто задаваемые вопросы | FAQ
								</a>
							</li>
							<li className="footer__list-item">
								<a href="#" class="footer__list-link">
									Способы оплаты
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="footer__copyright">
						2023 © PSGAMES • Аренда и прокат игр для PS4 и PS5
					</div>
					<div className="footer__payments">
						<img
							src={YouMoney}
							alt="YouMoney"
							className="footer__payment-img"
						/>
						<img
							src={MasterCard}
							alt="MasterCard"
							className="footer__payment-img"
						/>
						<img src={Qiwi} alt="Qiwi" className="footer__payment-img" />
						<img src={Visa} alt="Visa" className="footer__payment-img" />
						<img src={Mir} alt="Mir" className="footer__payment-img" />
						<img
							src={AlphaBank}
							alt="AlphaBank"
							className="footer__payment-img"
						/>
						<img src={SPB} alt="SPB" className="footer__payment-img" />
						<img src={Tinkoff} alt="Tinkoff" className="footer__payment-img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
