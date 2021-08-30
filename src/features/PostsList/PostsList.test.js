import React from "react";
import PostsList from "./PostsList";
import { render, makeTestStore, fireEvent, screen } from "../testUtils/testUtils";

jest.mock("../PostsSkeleton/PostsSkeleton", () => {
	return {
		__esModule: true,
		default: () => {
			return <p>PostsSkeletonMock</p>;
		},
	};
});

jest.mock("../posts/Post", () => {
	return {
		__esModule: true,
		default: ({ post }) => {
			return (
				<div rol='fake post'>
					<p>{post.title}</p>
					<p>{post.img}</p>
					<p>{post.url}</p>
					<p>{post.upvotes}</p>
					<p>{post.date}</p>
					<p>{post.author}</p>
					<p>{post.subreddit}</p>
					<p>{post.id}</p>
				</div>
			);
		},
	};
});

describe("PostsList", () => {
	it("should render first time (with posts.postFetchingStatus = idle, in store) without crashing ", () => {
		const initialState = {
			postFetchingStatus: "idle",
		};
		const name = "posts";
		const store = makeTestStore(name, initialState);

		render(<PostsList />, { store });
	});

	it("should fetch posts when rendered ", () => {
		const initialState = {
			postFetchingStatus: "idle",
		};
		const name = "posts";
		const store = makeTestStore(name, initialState);

		render(<PostsList />, { store });

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		// 	// expect(fetchPosts).toHaveBeenCalledTimes(2);
		// 	// expect(store.dispatch).toHaveBeenCalledWith(fetchPosts());
	});

	it("should display skeleton and match the snapshot when while posts are not fetched yet ", () => {
		const initialState = {
			postFetchingStatus: "idle",
		};
		const name = "posts";
		const store = makeTestStore(name, initialState);
		const { container } = render(<PostsList />, { store });
		expect(container).toMatchSnapshot();
	});

	it("should display skeleton and match the snapshot when while posts fetching is not completed yet ", () => {
		const initialState = {
			postFetchingStatus: "Loading",
		};
		const name = "posts";
		const store = makeTestStore(name, initialState);
		const { container } = render(<PostsList />, { store });
		expect(container).toMatchSnapshot();
	});

	it("should display error when posts fetching fails", () => {
		const initialState = {
			postFetchingStatus: "failed",
			error: "I have failed you master!",
		};
		const name = "posts";
		const store = makeTestStore(name, initialState);
		const { container } = render(<PostsList />, { store });
		expect(container).toMatchSnapshot();
	});

	it("should display posts after fetching has succeeded ", () => {
		const initialState = {
			postFetchingStatus: "succeeded",
			postList: [
				{
					title: "fake title 1",
					img: "fake img url 1",
					url: "fake link 1",
					upvotes: "10k",
					date: "1 days ago",
					author: "author 1",
					subreddit: "subreddit 1",
					id: "id 1",
				},
				{
					title: "fake title 2",
					img: "fake img url 2",
					url: "fake link 2",
					upvotes: "20k",
					date: "2 days ago",
					author: "author 2",
					subreddit: "subreddit 2",
					id: "id 2",
				},
				{
					title: "fake title 3",
					img: "fake img url 3",
					url: "fake link 3",
					upvotes: "30k",
					date: "3 days ago",
					author: "author 3",
					subreddit: "subreddit 3",
					id: "id 3",
				},
			],
		};
		const name = "posts";
		const store = makeTestStore(name, initialState);
		const { container } = render(<PostsList />, { store });
		expect(container).toMatchSnapshot();
	});
});
