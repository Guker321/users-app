import React from 'react';
import { render } from '@testing-library/react';

import UsersList from '../UsersList';

const testId = 'testingUsersList';

type UsersListProps = React.ComponentProps<typeof UsersList>;

const renderComponent = (props: UsersListProps = {}) => render(
  <UsersList
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент UsersList', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
