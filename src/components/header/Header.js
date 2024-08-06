import React from 'react';
import './Header.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FaBell, FaEnvelope, FaCog, FaSearch } from 'react-icons/fa';
import profile from '../../assets/profile.jpg';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="header">
      
      <Form inline className="flex-grow-1 mx-3 position-relative">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 search-input"
        />
        <FaSearch className="search-icon" />
      </Form>
      <div className="icons">
        <FaEnvelope className="icon" />
        <FaCog className="icon" />
        <FaBell className="icon" />
        <img
          src={profile}
          alt="profile"
          className="rounded-circle"
          width="30"
          height="30"
        />
      </div>
    </Navbar>
  );
};

export default Header;
