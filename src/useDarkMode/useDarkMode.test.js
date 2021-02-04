import { renderHook, act } from '@testing-library/react-hooks';
import { useDarkMode } from './index';

test('allows you to undo and redo', () => {
  const { result } = renderHook(() => useDarkMode());
  expect(result.current.theme).toBe('light');
  act(() => {
    result.current.toggleTheme();
  });
  expect(result.current.theme).toBe('dark');
});

/*
##Another example:

Just to see the difference, this test is using
`react-test-renderer` -- a low level testing framework.
The most common way to test custom hooks is to mock them.
In this example we've created an example component alongside
our hook for testing purposes only. This is an acceptable practice,
though it feels wrong.

import renderer, { act } from "react-test-renderer";
import { useDarkMode, DarkModeExample } from './index';

test("Returns string 'theme-dark'", () => {
  const component = renderer.create(
    <DarkModeExample />
  );
  act(() => {
    component.toJSON().props.onClick();
  });
  expect(component.toJSON().children[1]).toBe('dark');
});

*/
