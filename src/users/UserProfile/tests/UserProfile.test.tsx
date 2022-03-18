import React from 'react';
import { render } from '@testing-library/react';

import UserProfile from '../UserProfile';

const testId = 'testingUserProfile';

type UserProfileProps = React.ComponentProps<typeof UserProfile>;

const renderComponent = (props: UserProfileProps = {}) => render(
  <UserProfile
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент UserProfile', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
