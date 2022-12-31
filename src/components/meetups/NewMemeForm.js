import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import memesData from "../../memesData";

import { memesActions } from "../../store/memes";

import Card from "../ui/Card";
import classes from "./NewMemeForm.module.css";

function NewMemeForm(props) {
	const dispatch = useDispatch();
	const history = useNavigate();

	const nameInputRef = useRef();
	const imageInputRef = useRef();
	const upperTextInputRef = useRef();
	const lowerTextInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredUpperText = upperTextInputRef.current.value;
		const enteredLowerText = lowerTextInputRef.current.value;

		const memeData = {
			id: Math.floor(Math.random() * (1000 - 200 + 1)) + 200,
			name: enteredName,
			url: enteredImage,
			upper: enteredUpperText,
			lower: enteredLowerText,
			likes: 0,
			dislikes: 0,
			favorites: false,
		};

		dispatch(memesActions.addNew(memeData));
		history("/");
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="name">Meme Title</label>
					<input type="text" required id="name" ref={nameInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="url">Meme Image</label>
					<input type="url" required id="url" ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="upper">Upper Text</label>
					<input type="text" required id="upper" ref={upperTextInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="lower">Lower Text</label>
					<textarea
						id="description"
						required
						rows="5"
						ref={lowerTextInputRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Create Meme</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMemeForm;
