import React from 'react';
import { render } from '@testing-library/react';

import FilterBar from '../FilterBar';

const testId = 'testingFilterBar';

type FilterBarProps = React.ComponentProps<typeof FilterBar>;

const renderComponent = (props: FilterBarProps = {}) => render(
  <FilterBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент FilterBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
