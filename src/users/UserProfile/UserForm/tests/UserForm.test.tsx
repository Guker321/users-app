import React from 'react';
import { render } from '@testing-library/react';

import UserForm from '../UserForm';

const testId = 'testingUserForm';

type UserFormProps = React.ComponentProps<typeof UserForm>;

const renderComponent = (props: UserFormProps = {}) => render(
  <UserForm
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент UserForm', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
