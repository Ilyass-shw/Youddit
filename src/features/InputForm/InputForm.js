import React, { useState } from "react";
import "./InputForm.css";
import { InlineIcon } from "@iconify/react";
import search16Filled from "@iconify-icons/fluent/search-16-filled";
import { fetchPosts, searchTermSet } from "../posts/postsSlice/postsSlice";
import { useDispatch } from "react-redux";
import { Transition } from "react-spring/renderprops";
export const InputForm = () => {
	const dispatch = useDispatch();

	const [term, setTerm] = useState("");
	const [mouseOnSearchButton, setMouseOnSearchButton] = useState(false);

	const handleChange = ({ target }) => {
		setTerm(target.value);
	};

	const handleOnClick = (e) => {
		if (term) {
			dispatch(searchTermSet(term));
			dispatch(fetchPosts());
		}
		e.preventDefault();
	};

	const show = true;
	return (
		<div className="input">
			<form action="#" className="input-form" autoComplete="off">
				<Transition
					config={{ duration: 500 }}
					items={show}
					from={{ flexBasis: "0rem" }}
					enter={{ flexBasis: "34.5rem" }}
				>
					{(show) =>
						show &&
						((props) => (
							<input
								style={props}
								type="text"
								name="search"
								value={term}
								onChange={handleChange}
								placeholder="Search"
							/>
						))
					}
				</Transition>

				<div className="button-container">
					<button
						data-testid="search-button"
						className="search-button"
						onMouseEnter={() => {
							setMouseOnSearchButton(true);
						}}
						onMouseLeave={() => {
							setMouseOnSearchButton(false);
						}}
						onClick={handleOnClick}
					>
						<InlineIcon
							icon={search16Filled}
							width="1.22rem"
							height="1.22rem"
							color={mouseOnSearchButton ? "#a3a3a3" : "#6f6f6f"}
						/>
					</button>
					<p className="search-label">Search</p>
				</div>
			</form>
		</div>
	);
};
