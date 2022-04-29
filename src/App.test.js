import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from './components/Calculator';

describe('All components', () => {
  test('renders Quote component', () => {
    const h2 = renderer.create(<h2>New Quote</h2>).toJSON();
    expect(h2).toMatchInlineSnapshot(`
<h2>
  New Quote
</h2>
`); 
  });

  test('renders Home component', () => {
    const h2 = renderer.create(<h2>Welcome to our page</h2>).toJSON();
    expect(h2).toMatchInlineSnapshot(`
<h2>
  Welcome to our page
</h2>
`);
  });
  test('renders Calculator component', () => {
    render(<Calculator />);
    screen.getAllByRole('button');
    
  });
});