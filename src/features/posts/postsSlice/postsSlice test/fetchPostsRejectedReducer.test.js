import  {  fetchPosts } from "../postsSlice";
import store from "../../../../app/store.js";
import { server, rest } from "../../../../testServer";
import { wait } from "@testing-library/react";

describe("fetchPosts fulfilled reducer", () => {
	it("should change postFetchingStatus from idle to failed if the fetching fails", async () => {
		server.use(
			rest.get("https://www.reddit.com/search.json", (req, res) => {
				return res((res) => {
					res.status = 404;
					res.statusText = "I failed, so sad :(";
					res.body = JSON.stringify({ error: "You must add request handler." });
					res.headers.set("Content-Type", "application/json");
					return res;
				});
			})
		);

		let postFetchingStatus = store.getState().posts.postFetchingStatus;
		let error = store.getState().posts.error;

		expect(postFetchingStatus).toBe("idle");
		expect(error).toBeNull();

		store.dispatch(fetchPosts());

		await wait(() => expect(store.getState().posts.postFetchingStatus).toBe("failed"));
		postFetchingStatus = store.getState().posts.postFetchingStatus;
		error = store.getState().posts.error;

		expect(postFetchingStatus).toBe("failed");
		expect(error).toBe("I failed, so sad :(");
	});
});
