import React from "react";
import Post from "./Post";
import { render, makeTestStore } from "../testUtils/testUtils";

jest.mock("@iconify/react", () => {
	return { Icon: () => <p>Icon mock</p> };
});
describe("Post", () => {
	it("should render without crashing ", () => {
		const store = makeTestStore();

		render(
			<Post
				post={{
					title: "fake title 1",
					img: "fake img url 1",
					url: "fake link 1",
					upvotes: "10k",
					date: "1 days ago",
					author: "author 1",
					subreddit: "subreddit 1",
					id: "id 1",
				}}
			/>,
			{ store }
		);
	});

	it("should match the snapshot on desktop", () => {
		const store = makeTestStore();
        global.innerWidth= 1000

		const { container } = render(
			<Post
				post={{
					title: "fake title 1",
					img: "fake img url 1",
					url: "fake link 1",
					upvotes: "10k",
					date: "1 days ago",
					author: "author 1",
					subreddit: "subreddit 1",
					id: "id 1",
				}}
			/>,
			{ store }
		);

        expect(container).toMatchSnapshot()
	});

	it("should match the snapshot on devices smaller than desktop", () => {
		const store = makeTestStore();
        global.innerWidth= 579

		const { container } = render(
			<Post
				post={{
					title: "fake title 1",
					img: "fake img url 1",
					url: "fake link 1",
					upvotes: "10k",
					date: "1 days ago",
					author: "author 1",
					subreddit: "subreddit 1",
					id: "id 1",
				}}
			/>,
			{ store }
		);

        expect(container).toMatchSnapshot()
	});
});
