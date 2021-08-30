import reducer, { fetchPosts } from "../postsSlice";

describe("fetchPosts pending reducer", () => {
	it("should change postFetchingStatus from idle to loading while pending", () => {
		const initialState = {
			searchTerm: "memes",
			postList: [],
			filter: "relevance",
			firstFilter: "relevance",
			lastFilter: "comments",
			postFetchingStatus: "idle",
			error: null,
		};
		const newState = reducer(initialState, fetchPosts.pending);
		expect(newState.postFetchingStatus).toBe("Loading");
	});
});
