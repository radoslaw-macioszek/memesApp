import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
	const favorites = useSelector((state) =>
		state.memes.memes.filter((meme) => meme.favorites)
	);
	const favoritesLength = favorites.length;

	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link to="/">Memes</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All</Link>
					</li>
					<li>
						<Link to="/favorites">
							Favorites
							<span className={classes.badge}>{favoritesLength}</span>
						</Link>
					</li>
					<li>
						<Link to="/new-meme">Create New</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
