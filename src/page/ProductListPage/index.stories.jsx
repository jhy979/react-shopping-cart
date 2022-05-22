import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import ProductListPage from 'page/ProductListPage';

export default {
  component: ProductListPage,
  title: 'Pages/ProductListPage',
  argTypes: {
    itemList: {table: {disable: true}},
  },
};

const Template = (args) => (
  <BrowserRouter>
    <ProductListPage {...args} />
  </BrowserRouter>
);

export const Defaults = Template.bind({});
Defaults.args = {};
