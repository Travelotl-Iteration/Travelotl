import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import tripReducer from './reducers/tripReducer';
import itineraryReducer from './reducers/itineraryReducer';

import App from './App';
import Manager from './components/Manager';
import Main from './components/Main';

import About from './components/About';
import Login from './components/Login';
import Logout from './components/Logout';
import Form from './components/Form';
import Page1 from './components/formPages/Page1';
import Page2 from './components/formPages/Page2';
// import Page3 from './components/formPages/Page3';
import Page4 from './components/formPages/Page4';
import ItineraryPage from './components/ItineraryPage';
import Register from './components/Register';
import '../styles.css';
import MapUI from './components/mapView';

export const store = configureStore({
  reducer: {
    trip: tripReducer,
    itinerary: itineraryReducer,
  }
});

const root = document.getElementById('root');

// || document.createElement('div')

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path='/manager' element={<Manager />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path="/form" element={<Form />}>
              <Route index element={<Page1 />} />
              <Route path="/form/page2" element={<Page2 />} />
              {/* <Route path="/form/page3" element={<Page3 />} /> */}
              <Route path="/form/page4" element={<Page4 />} />
            </Route>
          </Route>
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/map" element={<MapUI />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);