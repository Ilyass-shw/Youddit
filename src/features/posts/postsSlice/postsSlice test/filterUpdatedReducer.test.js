import { filterUpdated } from "../postsSlice";
import store from "../../../../app/store.js";

describe("filterUpdated reducer", () => {
	it("should handle filterUpdated", () => {
		let filter = store.getState().posts.filter;
		expect(filter).toBe("relevance");

		store.dispatch(filterUpdated("comments"));
		filter = store.getState().posts.filter;
		expect(filter).toBe("comments");

		store.dispatch(filterUpdated("top"));
		filter = store.getState().posts.filter;
		expect(filter).toBe("top");
	});
});
