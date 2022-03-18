import React from 'react';
import { render } from '@testing-library/react';

import NotFound from '../NotFound';

const testId = 'testingNotFound';

type NotFoundProps = React.ComponentProps<typeof NotFound>;

const renderComponent = (props: NotFoundProps = {}) => render(
  <NotFound
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент NotFound', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
