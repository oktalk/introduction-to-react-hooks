import React from "react";
import renderer, { act } from "react-test-renderer";
import { DarkModeExample } from "./useDarkMode";

test("Returns string 'theme-dark'", () => {
  const component = renderer.create(
    <DarkModeExample />
  );
  act(() => {
    component.toJSON().props.onClick();
  });
  expect(component.toJSON().children[1]).toBe('dark');
});
