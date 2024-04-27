import '@testing-library/jest-dom'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {render} from '@testing-library/react';
import Header from '../client/components/Header.jsx';
import Manager from '../client/components/Manager.jsx';
import { Provider } from 'react-redux';
import store from '../client/index.jsx';

const store = store();

const Mocktest =()=>{
  return(
    <BrowserRouter>
    <Provider store={store} >
      <Manager />
      <Header />
      </Provider>
    </BrowserRouter>
  )
};

// let text;

// beforeAll(() => {
//   text = render(<Mocktest />);
// })

test('should render Itinerary Manager header', () => {
  const text = render(<Mocktest />);
  expect(text.getByText('Itinerary Manager').toBeTruthy());
})