import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MemberList from './index';

const INIT_LIST = {
  team: {
    currentMembers: [
      { id: 0, name: 'Badrock' },
      { id: 1, name: 'Vogue' },
    ],
  },
};

const renderComponent = () => render(<MemberList initList={INIT_LIST} />);

const submitForm = ({ getByText, getByLabelText }, { name }) => {
  fireEvent.change(getByLabelText('Add new member'), {
    target: { value: name },
  });
  fireEvent.click(getByText(/Update/i));
};

describe('on mount', () => {
  test('displays list items', () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  test('removes first item in list', () => {
    const { getAllByRole } = renderComponent();
    fireEvent.click(getAllByRole('button')[0]);
    expect(getAllByRole('listitem')).toHaveLength(1);
  });

  test('adds item to list', async () => {
    const component = renderComponent();
    submitForm(component, { name: 'Trevor' });
    await waitFor(() => {
      expect(component.getByText(/Trevor/i)).toHaveTextContent('Trevor');
      expect(component.getAllByRole('listitem')).toHaveLength(3);
    });
  });
});
