import { useSelector } from "react-redux";

import classes from "./AllMemes.module.css";

import MemeList from "../components/meetups/MemeList";

function AllMemesPage() {
	const memes = useSelector((state) => state.memes.memes);
	const isLoading = useSelector((state) => state.memes.isLoading);

	const tops = useSelector((state) =>
		state.memes.memes.filter((meme) => meme.top)
	);

	const created = useSelector((state) =>
		state.memes.memes.filter((meme) => meme.created)
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className={classes.twoColumnsGrid}>
			<div className={classes.favoritesColumn}>
				<h1>Hot memes</h1>
				<ul>
					<MemeList memes={tops} />
				</ul>
			</div>
			<div className={classes.allMemesColumn}>
				<h1 className={classes.columnName}>All memes</h1>
				<ul className={classes.sixColumnsGrid}>
					<span>
						created by you:
						<MemeList memes={created} />
					</span>
					<span>
						others:
						<MemeList memes={memes} />
					</span>
				</ul>
			</div>
		</div>
	);
}

export default AllMemesPage;
