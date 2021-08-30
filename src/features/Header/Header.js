import React, { useState } from "react";
import "./Header.css";
import { InlineIcon } from "@iconify/react";
import redditFill from "@iconify-icons/akar-icons/reddit-fill";
import bxsVideoPlus from "@iconify-icons/bx/bxs-video-plus";
import appMenu from "@iconify-icons/fe/app-menu";
import bellIcon from "@iconify-icons/mdi/bell";
import { InputForm } from "../InputForm/InputForm.js";
import search16Filled from "@iconify-icons/fluent/search-16-filled";
import arrowLeft from "@iconify-icons/akar-icons/arrow-left";
import useWindowDimensions from "../Helper/UseWindowDimensions";
const Header = () => {

	const {width} = useWindowDimensions()
	let isNotDesktop =width< 460;

	const [isSearching, setIsSearching] = useState(false);

	const handleOnSearchClick = () => {
		isNotDesktop = false;
		setIsSearching(true);
	};
	const handleOnBackArrowClick = () => {
		setIsSearching(false);
	};

	return (
		<div className="header">
			{!isSearching && (
				<div className="reddit-logo" data-testid="reddit-logo">
					<h3>
						<InlineIcon icon={redditFill} color={"red"} width="1.7rem" height="1.7rem" /> Tubeddit
					</h3>
				</div>
			)}

			{isSearching && (
				<div className="go-back-button" data-testid="go-back-button" onClick={handleOnBackArrowClick}>
					<InlineIcon icon={arrowLeft} />
				</div>
			)}

			{(!isNotDesktop || isSearching) && <InputForm className="inputForm" />}

			{!isSearching && (
				<div className="header-user-features">
					<div className="icon-container">
						{isNotDesktop && (
							<button data-testid="mobile-search-button" className="mobile-search-button" onClick={handleOnSearchClick}>
								<InlineIcon icon={search16Filled} width="1.5rem" height="1.5rem" color={"white"} />
							</button>
						)}
					</div>

					<div className="icon-container">
						<a className="user-icon" href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
							<InlineIcon icon={bxsVideoPlus} color={"white"} width="1.5rem" height="1.5rem" />
						</a>
						<p className="icon-label">Create</p>
					</div>

					<div className="icon-container">
						<a className="user-icon" href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
							<InlineIcon icon={appMenu} color={"white"} width="1.5rem" height="1.5rem" />
						</a>
						<p className="icon-label">Apps</p>
					</div>

					<div className="icon-container">
						<a className="user-icon" href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
							<InlineIcon icon={bellIcon} color={"white"} width="1.5rem" height="1.5rem" />
						</a>
						<p className="icon-label">Notifications</p>
					</div>

					<div className="icon-container">
						<a className="user-icon" href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
							<InlineIcon icon={redditFill} color={"white"} width="1.5rem" height="1.5rem" />
						</a>
					</div>
				</div>
			)}
		</div>
	);
};


export default Header;
