import {GlobalStyles} from 'style/globalStyle.js';
import {addDecorator} from '@storybook/react';
import {ThemeProvider} from 'styled-components';
import theme from 'theme/theme';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';

import productListReducer from 'store/modules/productList';
import cartReducer from 'store/modules/cart';
import selectedItemReducer from 'store/modules/selectedItem';

import {initialize, mswDecorator} from 'msw-storybook-addon';

const rootReducer = combineReducers({
  productListReducer,
  cartReducer,
  selectedItemReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

addDecorator((story) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  </Provider>
));

if (process.env.NODE_ENV === 'development') {
  initialize();
  addDecorator(mswDecorator);
}

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
