/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PrintLayout from './PrintLayout';

const fonts = [
  { importName: 'Baloo+Bhaina', family: 'Baloo Bhaina'},
  { importName: 'Pacifico', family: 'Pacifico'},
  { importName: 'Amatic+SC', family: 'Amatic SC'},
];

it('renders correctly', () => {
  const wrapper = mount(
    <PrintLayout
      bodyFont={'Amatic SC'}
      fonts={fonts}
    >
      <h1 style={{fontFamily: 'Baloo Bhaina'}}>Baloo Bhaina - Mist enveloped the ship three hours out from port.</h1>
      <h1 style={{fontFamily: 'Pacifico'}}>Pacifico - Mist enveloped the ship three hours out from port.</h1>
      <h1>Body font - Amatic SC - Mist enveloped the ship three hours out from port.</h1>
    </PrintLayout>
  );

  expect(wrapper).toMatchSnapshot();
});
