import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between position-fixed">
      <div>
      <div className="icon-container active-home">
          <i className="pi pi-th-large"></i>
        </div>
        <div className="icon-container active-home">
          <i className="pi pi-home"></i>
        </div>
        <div className="icon-container">
          <i className="pi pi-chart-bar"></i>
        </div>
        <div className="icon-container">
          <i className="pi pi-calendar"></i>
        </div>
        <div className="icon-container">
          <i className="pi pi-envelope"></i>
        </div>
        <div className="icon-container">
          <i className="pi pi-shopping-bag"></i>
        </div>
      </div>
      <div className="icon-container last">
        <i className="pi pi-sign-out"></i>
      </div>
    </div>
  );
};

export default Sidebar;
