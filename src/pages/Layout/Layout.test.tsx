import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

test('renders Layout', () => {
  const Component = () => <div>This is a test component</div>;
  const rendered = render(<Layout><Component /></Layout>)
  expect(rendered).toMatchSnapshot();
});
