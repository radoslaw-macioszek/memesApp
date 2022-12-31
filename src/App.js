import { Route, Routes } from "react-router-dom";
import { useEffect, Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import AllMemesPage from "./pages/AllMemes";
import Favorites from "./pages/Favorites";
import NewMemesPage from "./pages/NewMemes";
import Layout from "./components/layout/Layout";

import { fetchMemeData } from "./store/memes-actions";
import memesData from "./memesData";

function App() {
	const dispatch = useDispatch();
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		if (!isInitialized) {
			return;
		}
		dispatch(fetchMemeData("favorites"));
		dispatch(fetchMemeData("memes"));
		dispatch(fetchMemeData("newMemes"));
		dispatch(fetchMemeData("top"));
	}, [isInitialized]);

	useEffect(() => {
		const dataExists = async () => {
			const data = await fetch(
				`https://test-82a29-default-rtdb.firebaseio.com/memes.json`
			);

			return data;
		};

		const seedMemes = async () => {
			const data = await (await dataExists()).json();
			if (data) {
				setIsInitialized(() => true);
				return;
			}
			await fetch(`https://test-82a29-default-rtdb.firebaseio.com/memes.json`, {
				method: "PUT",
				body: JSON.stringify(memesData.data.memes),
			});
			setIsInitialized(() => true);
		};

		seedMemes().catch((error) => {});
	}, []);

	useEffect(() => {
		return () => {};
	});

	return (
		<Fragment>
			<Layout>
				<Routes>
					<Route path="/" element={<AllMemesPage />}></Route>
					<Route path="/hot" element={<Favorites />}></Route>
					<Route path="/favorites" element={<Favorites />}></Route>
					<Route path="/new-meme" element={<NewMemesPage />}></Route>
				</Routes>
			</Layout>
		</Fragment>
	);
}

export default App;
