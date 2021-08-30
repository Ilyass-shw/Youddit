import React from "react";
import PropTypes from "prop-types";
import "./Post.css";
import { Icon } from "@iconify/react";
import bxlReddit from "@iconify/icons-bx/bxl-reddit";
import { handleThumbnail } from "../../api/api";

const Post = ({ post }) => {
	let isDesktop = window.innerWidth > 580;
	return (
		<div className="post-block">
			<a
				alt={post.title}
				href={"https://www.reddit.com" + post.url}
				target="_blank"
				rel="noopener noreferrer"
				className="image-container"
			>
				{handleThumbnail(post.img)}
			</a>
			<div className="post-data">
				<a alt={post.title} href={"https://www.reddit.com" + post.url} target="_blank" rel="noopener noreferrer">
					<div className="post-data-container">
						{!isDesktop && (
							<div className="subreddit">
								<Icon icon={bxlReddit} width="1.5rem" height="1.5rem" />
							</div>
						)}
						<div className="mobile-post-data">
							<h4 className="title">{post.title}</h4>
							<div className="upvotes-date-data">
								<p>
									{post.subreddit}
									<span className="dot">•</span>
									{post.upvotes} upvotes<span className="dot">•</span>
									{post.date}
								</p>
							</div>
						</div>
						{isDesktop && (
							<div className="subreddit">
								<Icon icon={bxlReddit} width="1.5rem" height="1.5rem" />
								<p className="subreddit-name">{post.subreddit}</p>
								<p className="subreddit-label">{post.subreddit}</p>
							</div>
						)}
					</div>
				</a>
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired,
};

export default Post;
