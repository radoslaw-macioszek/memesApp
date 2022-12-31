import classes from "./MemeList.module.css";

import MemeItem from "./MemeItem";

function MemeList(props) {
	return (
		<ul className={classes.list}>
			{props.memes?.map((meme) => (
				<MemeItem
					key={meme.id}
					meme={meme}
				/>
			))}
		</ul>
	);
}

export default MemeList;
