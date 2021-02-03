import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import MemberList from "./MemberList";

const INIT_LIST = {
  team: {
    currentMembers: [
      {id: 0, name: 'Badrock'},
      {id: 1, name: 'Vogue'},
    ]   
  }
}

describe('on mount', () => {
  test("displays list items", () => {
    const { getAllByRole } = render(<MemberList initList={INIT_LIST} />);
    expect(getAllByRole('listitem')).toHaveLength(2);
  });
  test("removes first item in list", () => {
    const { getAllByRole } = render(<MemberList initList={INIT_LIST} />);
    const [first] = getAllByRole('listitem');
    console.log(first);
    fireEvent.click(first.getByRole('button'));
    expect(getByText(/1/)).toHaveTextContent('1');
  });
});
