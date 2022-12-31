import MemeList from "../components/meetups/MemeList";
import classes from "./AllMemes.module.css";

import { useSelector } from "react-redux";

function Favorites() {
	const favorites = useSelector((state) =>
		state.memes.memes.filter((meme) => meme.favorites)
	);

	console.log(favorites, "favo");

	let content;

	if (favorites.length === 0) {
		content = <p>You got no favorites yet. Start Adding some.</p>;
	} else {
		content = <MemeList memes={favorites} />;
	}

	return (
		<div className={classes.sixColumnsGrid}>
			<h1>My Favorites</h1>
			{content}
		</div>
	);
}

export default Favorites;
