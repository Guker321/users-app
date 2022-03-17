import React from 'react';
import { render } from '@testing-library/react';

import User from '../User';

const testId = 'testingUser';

type UserProps = React.ComponentProps<typeof User>;

const renderComponent = (props: UserProps = {}) => render(
  <User
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент User', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
