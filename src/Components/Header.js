import React from 'react';
import { FaArrowLeft, FaMicrophone, FaRegSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-wrapper d-flex">
      <div className="header-con-wrapper d-flex">
        <div>
          <Link className="nav-link" to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <h1>Countries</h1>

        <div className="rec-settings d-flex">
          <FaMicrophone />
          <FaRegSun />
        </div>

      </div>
    </div>
  </header>
);

export default Header;
