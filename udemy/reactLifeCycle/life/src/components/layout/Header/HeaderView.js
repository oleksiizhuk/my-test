import React from 'react';
import { Link } from 'react-router-dom';
import FaceBookLogin from './components/FaceBookLogin';

const HeaderView = () => {
  const facebookLogin = process.env.FACEBOOK_OAUTH;
  console.log(facebookLogin);
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
        <li>
          <a href="https://www.facebook.com/v4.0/dialog/oauth?
client_id=2846849285325734&display=popup
&response_type=token
&redirect_uri=http://localhost:3000
"
          >
facebook
          </a>
        </li>
      </ul>
      <FaceBookLogin />
    </>
  );
};

export default HeaderView;
