import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client, getEndPoint, handlefetchedPosts } from "../../../api/api";

const initialState = {
	searchTerm: "memes",
	postList: [],
	filter: "relevance",
	firstFilter: "relevance",
	lastFilter: "comments",
	postFetchingStatus: "idle",
	error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, { getState }) => {
	const filter = getState().posts.filter;
	const searchTerm = getState().posts.searchTerm;

	const endPoint = getEndPoint(searchTerm, filter);
	const response = await client.get(endPoint);

	const fetchedPosts = handlefetchedPosts(response);
	return fetchedPosts;
});

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		searchTermSet(state, action) {
			state.searchTerm = action.payload;
		},
		filterUpdated(state, action) {
			state.filter = action.payload;
		},
		firstFilterUpdated(state, action) {
			state.firstFilter = action.payload;
		},
		lastFilterUpdated(state, action) {
			state.lastFilter = action.payload;
		},
	},
	extraReducers: {
		[fetchPosts.pending]: (state, action) => {
			state.postFetchingStatus = "Loading";
		},
		[fetchPosts.fulfilled]: (state, action) => {
			state.postFetchingStatus = "succeeded";
			state.postList = action.payload;
		},
		[fetchPosts.rejected]: (state, action) => {
			state.postFetchingStatus = "failed";
			state.error = action.error.message;
		},
	},
});

export const { searchTermSet, filterUpdated, firstFilterUpdated, lastFilterUpdated } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.postList;
