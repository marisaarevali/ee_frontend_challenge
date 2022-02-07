import React from 'react';
import { render, screen } from '@testing-library/react';
import { Color }  from '../Components/Color';

test('renders a color', () => {
    const colors = [
        {
        title: "test",
        price: 100
        }
    ]
  render(<Color colors={colors}  />);

  expect(colors).toStrictEqual([{price:100,title:'test'}])

});
