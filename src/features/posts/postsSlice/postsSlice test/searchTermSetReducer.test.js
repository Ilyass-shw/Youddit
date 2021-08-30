import  { searchTermSet } from "../postsSlice";
import store from "../../../../app/store.js";



describe("searchTermSet reducer", () => {
	it("should handle searchTermSet", () => {
		let searchTerm = store.getState().posts.searchTerm;
		expect(searchTerm).toBe("memes");

		store.dispatch(searchTermSet("random"));
		searchTerm = store.getState().posts.searchTerm;
		expect(searchTerm).toBe("random");

		store.dispatch(searchTermSet("shiney"));
		searchTerm = store.getState().posts.searchTerm;
		expect(searchTerm).toBe("shiney");
	});
});