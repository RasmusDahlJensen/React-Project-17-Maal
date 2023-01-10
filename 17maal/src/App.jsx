import "./App.scss";
import { Header } from "./components/partials/Header/Header";
import { Main } from "./components/partials/Main/Main";

function App() {
	return (
		<div className="App">
			<div>
				<Header />
			</div>
			<div>
				<Main />
			</div>
		</div>
	);
}

export default App;
