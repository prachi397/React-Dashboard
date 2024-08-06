import React from 'react';
import './Card.css';

const Card = ({ title, value, icon, percentage, imageUrl, arrowIcon }) => {
  return (
    <div className={`card bg-dark text-white mb-3`} style={{ height: '100%', borderRadius: '10px'}}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
        <div>
          {imageUrl ? (
            <img src={imageUrl} alt={title} style={{ width: '2rem', height: '2rem', marginBottom:'1rem' }} />
          ) : (
            <i className={`bi bi-${icon} display-4`}></i>
          )}
        </div>
          <p className="card-title">{title}</p>
          <div className='card-data'>
          <h4 className="card-text">{value}</h4>
          <div className='percentVal'>
          <i className={`pi ${arrowIcon}`}></i>
          <p className="card-text">{percentage}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

  
