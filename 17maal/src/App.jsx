import "./App.scss";
import { Header } from "./components/partials/Header/Header";
import { Main } from "./components/partials/Main/Main";
import { Form } from "./components/partials/Form/Form";
import { Footer } from "./components/partials/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/App/AppRouter/AppRouter";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div>
					<Header />
				</div>
				<AppRouter />
				<div>
					<Main></Main>
				</div>
				<div>
					<Form />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
