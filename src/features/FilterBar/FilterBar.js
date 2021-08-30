import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./FilterBar.css";
import { updateArrowClass, handleEvent } from "./FilterBarUtils";
import FilterButtons from "../FilterButtons/FilterButtons";

import { InlineIcon } from "@iconify/react";

import arrowIosForwardOutline from "@iconify-icons/eva/arrow-ios-forward-outline";
import arrowIosBackOutline from "@iconify-icons/eva/arrow-ios-back-outline";

export const FilterBar = () => {
	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(false);

	const firstFilter = useSelector((state) => state.posts.firstFilter);
	const lastFilter = useSelector((state) => state.posts.lastFilter);

	const filterBar = useRef();

	const handleScrollLeft = () => {
		filterBar.current.scrollLeft -= 100;
	};

	const handleScrollRight = () => {
		filterBar.current.scrollLeft += 100;
	};
	// style scroll arrows on first render
	useEffect(() => {
		updateArrowClass(setShowLeft, setShowRight, firstFilter, lastFilter);
	}, [firstFilter, lastFilter]);

	// style scroll arrows onScroll and onResize
	useEffect(() => {
		const FilterBar = filterBar.current;
		FilterBar.addEventListener("scroll", () => {
			handleEvent(setShowLeft, setShowRight, firstFilter, lastFilter);
		});
		window.addEventListener("resize", () => {
			handleEvent(setShowLeft, setShowRight, firstFilter, lastFilter);
		});

		return () => {
			FilterBar.removeEventListener("scroll", () => {
				handleEvent(setShowLeft, setShowRight, firstFilter, lastFilter);
			});
			window.addEventListener("resize", () => {
				handleEvent(setShowLeft, setShowRight, firstFilter, lastFilter);
			});
		};
	}, [firstFilter, lastFilter]);

	return (
		<div className="filter-bar-container">
			<div ref={filterBar} className="filter-bar">
				<div className={`arrow left ${showLeft ? "show" : "hide"}`}>
					<div className="arrow-button" data-testid="left-arrow" onClick={handleScrollLeft}>
						<InlineIcon icon={arrowIosBackOutline} />
					</div>
				</div>

				<FilterButtons />

				<div className={`arrow right  ${showRight ? "show" : "hide"}`}>
					<div className="arrow-button" data-testid="right-arrow" onClick={handleScrollRight}>
						<InlineIcon icon={arrowIosForwardOutline} />
					</div>
				</div>
			</div>
		</div>
	);
};
