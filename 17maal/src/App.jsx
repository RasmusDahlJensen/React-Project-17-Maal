import "./App.scss";
import { Header } from "./components/partials/Header/Header";
import { Main } from "./components/partials/Main/Main";
import { Form } from "./components/partials/Form/Form";
import { Footer } from "./components/partials/Footer/Footer";

function App() {
	return (
		<div className="App">
			<div>
				<Header />
			</div>
			<div>
				<Main />
			</div>
			<div>
				<Form />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
