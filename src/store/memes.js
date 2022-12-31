import { createSlice } from "@reduxjs/toolkit";
import memesData from "../memesData";

const initialState = {
	memes: memesData.data.memes,
};

const memesSlice = createSlice({
	name: "memes",
	initialState: initialState,
	reducers: {
		add(state, action) {
			const memeId = action.payload.id;
			const memeToUpdate = state.memes.find((meme) => meme.id === memeId);
			memeToUpdate.favorites = !memeToUpdate.favorites;
		},

		addNew(state, action) {
			const newItem = action.payload;
			state.memes.push({
				id: newItem.id,
				name: newItem.name,
				upper: newItem.upper,
				lower: newItem.lower,
				likes: 0,
				dislikes: 0,
				url: newItem.url,
				top: false,
				favorites: false,
				created: true,
			});
		},

		like(state, action) {
			const memeId = action.payload.id;
			const memeIndex = state.memes.findIndex((meme) => meme.id === memeId);
			const meme = state.memes[memeIndex];
			meme.likes = meme.likes + 1;
			if (meme.likes >= 5) {
				meme.top = true;
			}
			state.memes[memeIndex] = meme;
		},

		remove(state, action) {
			const memeId = action.payload.id;

			state.memes = state.memes.filter((meme) => meme.id !== memeId);
		},

		dislike(state, action) {
			const memeId = action.payload.id;
			const memeIndex = state.memes.findIndex((meme) => meme.id === memeId);
			const meme = state.memes[memeIndex];
			meme.dislikes = meme.dislikes + 1;
			if (meme.likes - meme.dislikes < 5) {
				meme.top = false;
			}
			state.memes[memeIndex] = meme;
		},
	},
});

export const memesActions = memesSlice.actions;
export default memesSlice;
