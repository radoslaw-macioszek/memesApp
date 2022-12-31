import { configureStore } from "@reduxjs/toolkit";

import memesSlice from "./memes";

const store = configureStore({
	reducer: { memes: memesSlice.reducer },
});

export default store;
