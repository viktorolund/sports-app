import React from "react";
import { Provider } from "react-redux";
import CareerPage from "../CareerPage";

import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

const mockStore = configureStore();
let store;

let career = [
  {
    id: 4,
    description: "qwerty",
    time: "2014"
  },
  {
    id: 5,
    description: "asdf",
    time: "2017"
  }
];

const initialState = { career: career };

test("renders data from array", () => {
  store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <CareerPage />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(true).toBe(true);
});
