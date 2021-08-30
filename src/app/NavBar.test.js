import React from "react";
import NavBar from "./NavBar";
import { jest } from "@jest/globals";
import { render } from "@testing-library/react";


jest.mock("@iconify-icons/bx/bx-menu", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

jest.mock("@iconify/react", () => {
	return { Icon: () => <p>Icon mock</p> };
});

jest.mock("@iconify-icons/entypo/home", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

jest.mock("@iconify-icons/ic/sharp-local-fire-department", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/ic/baseline-subscriptions", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/ic/baseline-video-library", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

describe("NavBar", () => {
	it("should match the snapshot", () => {
		const { container } = render(<NavBar />);
		expect(container).toMatchSnapshot();
	});

	it("should render without crashing", () => {
		const div = document.createElement("div");
		render(<NavBar />, div);
	});
});
