import Header from "./Header"
import React from 'react';

const About = () => {
  return (
    <div>
      <Header />
      <h1>About the Team</h1>
      <table>
        <thead>
          <tr>
            <th>Crystal Gems</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Will</td></tr>
          <tr><td>Yang</td></tr>
          <tr><td>Ashley</td></tr>
          <tr><td>Nicolette</td></tr>
        </tbody>
     </table>
    </div>
  );
};

export default About