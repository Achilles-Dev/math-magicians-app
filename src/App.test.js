import React from 'react';
import renderer from 'react-test-renderer';

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
});