import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import store, { makeCustomTestStore } from "./faksestore";

const TestProvider = ({ store, children }) => <Provider store={store}>{children}</Provider>;

export function render(ui, { store, ...otherOpts }) {
	return rtlRender(<TestProvider store={store}>{ui}</TestProvider>, otherOpts);
}

export function makeTestStore(name, initialState, reducers) {
	if (name && initialState) {
		const Store = makeCustomTestStore(name, initialState, reducers);
		const origDispatch = Store.dispatch;
		Store.dispatch = jest.fn(origDispatch);
		return Store;
	} else {
		const origDispatch = store.dispatch;
		store.dispatch = jest.fn(origDispatch);
		return store;
	}
}

// re-export everything
export * from "@testing-library/react";
