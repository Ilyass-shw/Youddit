import { handlefetchedPosts } from "../api";

describe("handlefetchedPosts", () => {
	it("should handle fetched posts", async () => {
		const response = await fetch(
			"https://www.reddit.com/search.json?q=rock and roll&limit=20&restrict_sr=true&sort=comment&t=all&show=all"
		);
		const data = await response.json();

		expect(handlefetchedPosts(data)).toMatchSnapshot();
	});
});
