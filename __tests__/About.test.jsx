import '@testing-library/jest-dom'
import React from 'react';
import { useNavigate, BrowserRouter } from "react-router-dom";

import {render, screen} from '@testing-library/react'
//import App from '../client/App.jsx'
//import index from '../client/index.jsx'

//import Main from '../client/components/Main.jsx'
import About from '../client/components/About.jsx'



// const mockUsedNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockUsedNavigate,
// }));

const Mocktest =()=>{
  return(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  )
}

test('Expect page to have text travel', () => {
    //expect(text).toHaveTextContent('Nicolette');
    //const { aboutText } = render(<About />)
    const aboutText = render(<Mocktest />)
    expect(aboutText.getByText("About the Team")).toBeTruthy();

  });




