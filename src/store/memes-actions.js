import { memesActions } from "./memes";

export const fetchMemeData = (name) => {
	return async (dispatch) => {
		const fetchData = async () => {
			dispatch(memesActions.fetchStart());
			const response = await fetch(
				`https://test-82a29-default-rtdb.firebaseio.com/${name}.json`
			);

			if (!response.ok) {
				dispatch(memesActions.fetchError());
				throw new Error(`Can not upload data`);
			}

			const data = await response.json();
			console.log("data", data);
			dispatch(memesActions.fetchEnd());

			return data;
		};

		try {
			const memeData = (await fetchData()) ?? [];
			dispatch(memesActions.replaceMeme({ memeData, name }));
		} catch (error) {
			console.log("error");
		}
	};
};

export const SendMemeData = (name, payload) => {
	return async (dispatch) => {
		const putRequest = async () => {
			console.log("payload", payload);
			const response = await fetch(
				`https://test-82a29-default-rtdb.firebaseio.com/${name}.json`,
				{
					method: "PUT",
					body: JSON.stringify(payload),
				}
			);

			const data = await response.json();
			return data;
		};

		try {
			dispatch(memesActions.fetchStart());
			console.log("put request");
			return await putRequest(name, payload);
		} catch (e) {
			console.log("error", e);
			dispatch(memesActions.fetchError());
		}
		dispatch(memesActions.fetchEnd());
	};
};

export const addFavorite = (meme) => {
	SendMemeData("favorite", meme)();
};
