import { render } from '@testing-library/react';
import { describe, it, expect, jest, afterAll } from '@jest/globals';

import RootPage from '../../app/page';

describe('Root page', () => {
  const { container, unmount } = render(<RootPage />);

  it('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('should have the correct tree parent', () => {
    expect(container).toBeInstanceOf(HTMLDivElement);
  });

  afterAll(() => {
    unmount();
  });
});
