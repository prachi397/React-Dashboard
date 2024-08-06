import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Profit.css';

const Profit = ({ title, value, percentage, arrowIcon, color }) => {
  return (
    <div className={`card bg-dark text-white bg-${color} mb-3`} style={{ height: '165px', width: "29vw", borderRadius: '10px' }}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className='profitContainer'>
          <div>
            <p className="Profitcard-title">{title}</p>
            <h2 className="card-text">{value}</h2>
            <div className='profitCard'>
              <i className={`pi ${arrowIcon}`}></i>
              <p className="card-text">{percentage}</p>
            </div>
          </div>
          <div className="progressBar">
            <CircularProgressbar value={70}
            />
            <div className="progressBarText">
              <h3>70%</h3>
              <span>Goal Completed</span>
            </div>
          </div>
        </div>
        <span className='note'>*The values here has been rounded off.</span>
      </div>
    </div>
  );
};

export default Profit;


