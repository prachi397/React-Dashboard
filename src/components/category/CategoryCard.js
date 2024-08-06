import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCog, faHamburger, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './CategoryCard.css';

const CategoryCard = () => {
  return (
    <div className={`card text-white bg-dark mb-3 category-conatiner`} style={{  width: "29vw",position: 'relative'  }} >
      <div className="category-card">
        <div className="goals">
          <div className="icon-container">
            <div className="icon">
              <FontAwesomeIcon icon={faCog} />
            </div>
            <p className="title">Goals</p>
          </div>
          <div className="arrow-container">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="dishes">
          <div className="icon-container">
            <div className="icon">
              <FontAwesomeIcon icon={faHamburger} />
            </div>
            <p className="title">Popular Dishes</p>
          </div>
          <div className="arrow-container">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="menus">
          <div className="icon-container">
            <div className="icon">
              <FontAwesomeIcon icon={faUtensils} />
            </div>
            <p className="title">Menus</p>
          </div>
          <div className="arrow-container">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
