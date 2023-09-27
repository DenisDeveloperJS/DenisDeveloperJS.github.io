const numberBtnToy = document.querySelector(".numbers__btn._toy");

if (numberBtnToy) {
	const numberBtnBox = document.querySelector(".numbers__btn._box");

	const numbersTopToy = document.querySelector(".numbers__top._toy");
	const numbersTopBox = document.querySelector(".numbers__top._box");

	const numbersImgToy = document.querySelector(".numbers__picture._toy");
	const numbersImgBox = document.querySelector(".numbers__picture._box");

	const activeToy = () => {
		if (!numbersTopToy.classList.contains("_active")) {
			numberBtnToy.classList.add("_active");
			numberBtnBox.classList.remove("_active");

			numbersTopToy.classList.add("_active");
			numbersTopBox.classList.remove("_active");

			numbersImgToy.classList.add("_active");
			numbersImgBox.classList.remove("_active");
		}
	};

	const activeBox = () => {
		if (!numberBtnBox.classList.contains("_active")) {
			numberBtnBox.classList.add("_active");
			numberBtnToy.classList.remove("_active");

			numbersTopBox.classList.add("_active");
			numbersTopToy.classList.remove("_active");

			numbersImgBox.classList.add("_active");
			numbersImgToy.classList.remove("_active");
		}
	};
	numberBtnToy.addEventListener("click", activeToy);

	numberBtnBox.addEventListener("click", activeBox);
}
