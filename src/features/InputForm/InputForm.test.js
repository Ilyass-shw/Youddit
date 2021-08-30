import { jest } from "@jest/globals";
import { render, makeTestStore, screen } from "../testUtils/testUtils";
import React from "react";
import { InputForm } from "./InputForm.js";
import { searchTermSet } from "../posts/postsSlice/postsSlice";
import userEvent from "@testing-library/user-event";

jest.mock("@iconify-icons/fluent/search-16-filled", () => {
	return {
		default: "search16FilledMock",
	};
});



// jest.mock("../posts/postsSlice", () => {
// 	return {
// 		...jest.requireActual("../posts/postsSlice"),
// 		fetchPosts: () => "posts are fetched",
// 	};
// });

jest.mock("react-spring/renderprops", () => {
	return {
		Transition: ({ children, enter }) => {
			return <div data-testid="Transition">{children("InputForm")(enter)}</div>;
		},
	};
});

jest.mock("@iconify/react", () => {
	return { InlineIcon: () => <p>InlineIcon mock</p> };
});

let store;

describe("InputForm", () => {
	beforeEach(() => {
		store = makeTestStore();
	});

	it("should render without crashing", () => {
		render(<InputForm />, { store });
	});

	it("should match the snapshot", () => {
		const { container } = render(<InputForm />, { store });

		expect(container).toMatchSnapshot();
	});

	it("should have an empty initial value for input ", () => {
		render(<InputForm />, { store });
		const input = screen.getByPlaceholderText("Search");
		expect(input.value).toBe("");
	});

	it("should not dispatch anything when clicked without defined term", () => {
		render(<InputForm />, { store });
		const input = screen.getByPlaceholderText("Search");
		expect(input.value).toBe("");
		const submitButton = screen.getByTestId("search-button");
		expect(store.dispatch).toBeCalledTimes(0);

		userEvent.click(submitButton);
		expect(store.dispatch).toBeCalledTimes(0);
	});

	it("should dispatch and fetch posts according to the typed term after clicking the search button", () => {
		render(<InputForm />, { store });
		const input = screen.getByPlaceholderText("Search");

		expect(input).toHaveValue("");

		userEvent.type(input, "memes");

		const submitButton = screen.getByTestId("search-button");

		expect(store.dispatch).toBeCalledTimes(0);

		userEvent.click(submitButton);

		expect(store.dispatch).toHaveBeenNthCalledWith(1, searchTermSet("memes"));
		expect(store.dispatch).toBeCalledTimes(2);
	});
});
