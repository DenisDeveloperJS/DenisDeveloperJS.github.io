import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
