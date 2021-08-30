import { firstFilterUpdated } from "../postsSlice";
import store from "../../../../app/store.js";

describe("firstFilterUpdated reducer", () => {
	it("should handle firstFilterUpdated", () => {
		let firstFilter = store.getState().posts.firstFilter;
		expect(firstFilter).toBe("relevance");

		store.dispatch(firstFilterUpdated("comments"));
		firstFilter = store.getState().posts.firstFilter;
		expect(firstFilter).toBe("comments");

		store.dispatch(firstFilterUpdated("new"));
		firstFilter = store.getState().posts.firstFilter;
		expect(firstFilter).toBe("new");
	});
});
