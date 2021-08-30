import { lastFilterUpdated } from "../postsSlice";
import store from "../../../../app/store.js";

describe("lastFilterUpdated reducer", () => {
	it("should handle lastFilterUpdated", () => {
		let lastFilter = store.getState().posts.lastFilter;
		expect(lastFilter).toBe("comments");

		store.dispatch(lastFilterUpdated("relevance"));
		lastFilter = store.getState().posts.lastFilter;
		expect(lastFilter).toBe("relevance");

		store.dispatch(lastFilterUpdated("hot"));
		lastFilter = store.getState().posts.lastFilter;
		expect(lastFilter).toBe("hot");
	});
});
