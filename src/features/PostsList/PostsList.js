import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../posts/Post";
import "./PostsList.css";
import { fetchPosts, selectAllPosts } from "../posts/postsSlice/postsSlice";
import PostsSkeleton from "../PostsSkeleton/PostsSkeleton";
import { nanoid } from "nanoid";

const PostsList = () => {
	const postsStatus = useSelector((state) => state.posts.postFetchingStatus);
	const postError = useSelector((state) => state.posts.error);
	const posts = useSelector(selectAllPosts);

	const dispatch = useDispatch();

	useEffect(() => {
		if (postsStatus === "idle") {
			dispatch(fetchPosts());
		}
	}, [postsStatus, dispatch]);

	let content;
	if (postsStatus === "idle" || postsStatus === "Loading") {
		content = Array(3)
			.fill()
			.map(() => {
				return <PostsSkeleton key={nanoid()} />;
			});
	} else if (postsStatus === "failed") {
		content = postError;
	}
	else {
		content = posts.map((post) => {
			return <Post key={post.id} post={post} />;
		});
	}

	return (
		<div className="posts-container">
			<div className="posts-list">{content}</div>
		</div>
	);
};

export default PostsList;
