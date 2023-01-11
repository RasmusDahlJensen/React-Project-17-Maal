import { Route, Routes } from "react-router-dom";
import { Home } from "../../Pages/Home";
import { About } from "../../Pages/About";
import { Products } from "../../Pages/Products";
import { Jobs } from "../../Pages/Jobs";
import { Contact } from "../../Pages/Contact";

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/products" element={<Products />} />
			<Route path="/Jobs" element={<Jobs />} />
			<Route path="/Contact" element={<Contact />} />
		</Routes>
	);
};
