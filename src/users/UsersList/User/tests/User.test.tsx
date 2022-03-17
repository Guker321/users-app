import React from 'react';
import { render } from '@testing-library/react';

import UserCard from '../UserCard';

const testId = 'testingUser';

type UserProps = React.ComponentProps<typeof UserCard>;

const renderComponent = (props: UserProps) => render(
  <UserCard
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент User', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
