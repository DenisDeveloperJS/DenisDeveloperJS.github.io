const formForm = document.querySelector(".form__form");
const submit = document.querySelector(".main-form__submit");
const formSuccess = document.querySelector(".form__success");

if (submit) {
	function validateForm(inputs) {
		let agree = [];

		inputs.forEach((item, i) => {
			if (item.value.trim() === "") {
				item.nextElementSibling.classList.add("not-required");
				submit.classList.add("not-required");

				console.log(item);
				item.addEventListener("input", () => {
					if (item.value.trim() !== "") {
						item.nextElementSibling.classList.remove("not-required");
					}
					if (
						!document.querySelectorAll(".main-form__message.not-required")
							.length
					) {
						submit.classList.remove("not-required");
					}
				});
			} else {
				agree.push(true);
			}
		});

		if (agree.length === 5) {
			submit.classList.remove("not-required");
			document.querySelector(".form__wrapper").remove();

			formSuccess.classList.add("_active");

			return true;
		}
	}
	if (window.jQuery) {
		jQuery(document).ready(function ($) {
			if ($("#application-form")) {
				$("#application-form").submit(function (e) {
					console.log(e);
					e.preventDefault();

					let value = [...this.querySelectorAll("input")];
					value = value.map(item => item.value);

					const str = $(this).serialize();

					const formAnswer = document.forms.application;

					const inputs = [...formAnswer].filter(
						item => item.tagName === "INPUT"
					);

					if (validateForm(inputs)) {
						$.ajax({
							type: "POST",
							url: "./mail.php",
							data: str,
							success: function (msg) {
								if (msg == "OK") {
									result = true;
								} else {
									result = msg;
								}
							},
						});

						return false;
					}
				});
			}
		});
	}
}
