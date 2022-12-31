import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

import { useDispatch } from "react-redux";

import classes from "./MemeItem.module.css";
import Card from "../ui/Card";

import { memesActions } from "../../store/memes";

function MemeItem(props) {
	const dispatch = useDispatch();
	const { id, name, url, likes, dislikes, favorites, upper, lower } =
		props.meme;

	const addToFavorites = () => {
		console.log(id);
		dispatch(
			memesActions.add({
				id,
				name,
				url,
				likes,
				dislikes,
			})
		);
	};

	const removeFavorite = () => {
		dispatch(
			memesActions.remove({
				id,
			})
		);
	};

	const likeMeme = () => {
		dispatch(
			memesActions.like({
				id,
			})
		);
	};

	const dislikeMeme = () => {
		dispatch(
			memesActions.dislike({
				id,
			})
		);
	};

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					{upper ? <p className={classes.upper}>{upper}</p> : null}
					<img src={url} alt={name} />
					{lower ? <p className={classes.lower}>{lower}</p> : null}
				</div>
				<div className={classes.content}>
					<h3>{name}</h3>
				</div>
				<div>
					<div className={classes.actions}>
						<button onClick={addToFavorites}>
							{favorites ? "Remove from favorites" : "add to favorites"}
						</button>
						<button onClick={removeFavorite}>"Remove"</button>
					</div>
					<div className={` ${classes.btns_vote}`}>
						<button className={classes.btn_vote}>
							<FaRegThumbsUp className={classes.thumbUp} onClick={likeMeme} />
							<span className={classes.badge}>{likes}</span>
						</button>
						<button className={classes.btn_vote}>
							<FaRegThumbsDown
								className={classes.thumbDown}
								onClick={dislikeMeme}
							/>
							<span className={classes.badge}>{dislikes}</span>
						</button>
					</div>
				</div>
			</Card>
		</li>
	);
}

export default MemeItem;
