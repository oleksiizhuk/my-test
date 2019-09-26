import React from 'react';
import { Link } from 'react-router-dom';
import FaceBookLogin from './components/FaceBookLogin';

const HeaderView = () => {
  return (
    <>
      <h2>Header</h2>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about/"> About</Link>
        </li>
      </ul>
      <FaceBookLogin />
    </>
  );
};

export default HeaderView;
