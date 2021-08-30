import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
	rest.get("https://www.reddit.com/search.json", (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
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
			})
		);
	}),
	rest.get("*", (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`);
		return res(ctx.status(500), ctx.json({ error: "You must add request handler." }));
	})
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
