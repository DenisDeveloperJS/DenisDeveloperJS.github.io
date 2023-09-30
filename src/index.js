import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./scss/app.scss";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

// Опять продолжли изучение реакт, супстя 2-3 месяца
// Опять продолжли изучение реакт, супстя 5 месяцев 13.07.23
