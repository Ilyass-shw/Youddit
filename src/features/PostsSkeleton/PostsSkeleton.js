import React from "react";
import "./PostsSkeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PostsSkeleton = () => {
	return (
		<div>
			<SkeletonTheme color="#262626" highlightColor="#444">
				<div className="post-block skeleton-post-block">
					<div className="content-image skeleton-content-image">
						<Skeleton width="240px" height="10rem" />
					</div>

					<div className="post-data skeleton-post-data-mobile">
						<div className="post-data-container skeleton-post-data-container-mobile">
							<Skeleton width="180px" height="20px" />
							<Skeleton width="140px" height="13px" />
						</div>

						<div className="subreddit skeleton-subreddit-mobile">
							<Skeleton className="subreddit-icon" />
							<Skeleton width="80px" height="13px" />
						</div>
					</div>
				</div>
			</SkeletonTheme>
		</div>
	);
};

export default PostsSkeleton;
