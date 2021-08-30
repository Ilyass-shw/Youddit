import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { InlineIcon } from "@iconify/react";
import bxsRocket from "@iconify-icons/bx/bxs-rocket";
import fireFilled from "@iconify-icons/ant-design/fire-filled";
import sharpNewReleases from "@iconify-icons/ic/sharp-new-releases";
import verticalAlignTop from "@iconify/icons-oi/vertical-align-top";
import commentsIcon from "@iconify/icons-icons8/comments";

import { filterUpdated, fetchPosts, firstFilterUpdated, lastFilterUpdated } from "../posts/postsSlice/postsSlice";

const FilterButtons = () => {
	const [filterBy, setFilterBy] = useState("relevance");

	const filterButtons = useRef()

	const dispatch = useDispatch();

	const handleOnClick = ({ target }) => {
		setFilterBy(target.value);
	};
	useEffect(() => {
		const firstFilter = filterButtons.current.firstElementChild.id.toLowerCase()
		const lastFilter = filterButtons.current.lastElementChild.id.toLowerCase()
		dispatch(firstFilterUpdated(firstFilter))
		dispatch(lastFilterUpdated(lastFilter))
	}, [dispatch]);
	useEffect(() => {
		dispatch(filterUpdated(filterBy));
		dispatch(fetchPosts());
	}, [filterBy, dispatch]);
	return (
		<div ref= {filterButtons}>
			<button
				className={`filter-button ${"relevance" === filterBy && "selected"}`}
				id="relevance"
				value="relevance"
				onClick={handleOnClick}
			>
				<InlineIcon icon={bxsRocket} /> Relevance
			</button>
			<button
				className={`filter-button ${"hot" === filterBy && "selected"}`}
				id="hot"
				value="hot"
				onClick={handleOnClick}
			>
				<InlineIcon icon={fireFilled} /> Hot
			</button>
			<button
				className={`filter-button ${"new" === filterBy && "selected"}`}
				id="new"
				value="new"
				onClick={handleOnClick}
			>
				<InlineIcon icon={sharpNewReleases} /> New
			</button>
			<button
				className={`filter-button ${"top" === filterBy && "selected"}`}
				id="top"
				value="top"
				onClick={handleOnClick}
			>
				<InlineIcon icon={verticalAlignTop} width=".6rem" height=".6rem" /> Top
			</button>
			<button
				className={`filter-button ${"comments" === filterBy && "selected"}`}
				id="comments"
				value="comments"
				onClick={handleOnClick}
			>
				<InlineIcon icon={commentsIcon} /> Comments
			</button>
		</div>
	);
};

export default FilterButtons;
