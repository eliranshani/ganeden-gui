import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import userIcon from './user.png';
import heartIcon from './heartIcon.png';

class Footer extends React.Component {
  public render() {

    return (
      <div className="footer">
        <Link to='/' className="icon">
          <img src={userIcon} alt="List" />
        </Link>
        <div className="plus-button">
          +
        </div>
        <Link to='/matches' className="icon">
          <img src={heartIcon} alt="List" />
        </Link>
      </div>
    );
  }
}

export default Footer;