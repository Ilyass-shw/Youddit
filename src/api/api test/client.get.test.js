import { client } from "../api";
import { server, rest } from "../../testServer";

describe("client.get", () => {
	it("should return data if fetching succeeds", async () => {
		const endPoint = `https://www.reddit.com/search.json?q=memes&limit=20&restrict_sr=true&sort=comments&t=all&show=all`;
		const expectedData = {
			data: {
				children: [
					{
						data: {
							title: "fake title 1",
							rpan_video: "fake img url 1",
							permalink: "fake link 1",
							ups: "115597",
							created_utc: "1617287798",
							author: "author 1",
							subreddit_name_prefixed: "subreddit 1",
							id: "id 1",
						},
					},
					{
						data: {
							title: "fake title 2",
							thumbnail: "fake img url 2",
							permalink: "fake link 2",
							ups: "115507",
							created_utc: "3617287718",
							author: "author 2",
							subreddit_name_prefixed: "subreddit 2",
							id: "id 2",
						},
					},
					{
						data: {
							title: "fake title 3",
							rpan_video: "fake img url 3",
							permalink: "fake link 3",
							ups: "115593",
							created_utc: "2617287793",
							author: "author 3",
							subreddit_name_prefixed: "subreddit 3",
							id: "id 3",
						},
					},
				],
			},
		};

		const actualData = await client.get(endPoint);

		expect(actualData).toStrictEqual(expectedData);
	});

	it("should return error message if fetching fails", async () => {
		server.use(
			rest.get("https://www.reddit.com/search.json", (req, res) => {
				return res((res) => {
					res.status = 404;
					res.statusText = "I failed, so sad :((";
					res.body = JSON.stringify({ error: "You must add request handler." });
					res.headers.set("Content-Type", "application/json");
					return res;
				});
			})
		);

		const endPoint = `https://www.reddit.com/search.json?q=memes&limit=20&restrict_sr=true&sort=comments&t=all&show=all`;
		
		try {
			await client.get(endPoint);
		} catch (err) {
			expect(err).toBe("I failed, so sad :((");
		}
	});

});


