import React from 'react';
import './Feedback.css';
import { Rating } from 'react-simple-star-rating';
import profile from '../../assets/profile.jpg';

const Feedback = () => {
  return (
    <div className="card bg-dark text-white mb-3 feedback-comp" style={{height:'82vh', overflowY:'scroll', overflowX:'hidden', borderRadius: '10px', width:'29vw' }}>
      <h3 className='feedback-head'>Customer's Feedback</h3>
      <div className="card-body feedback-container">
        <div className="profile">
          <img src={profile} alt="Jenny Wilson" className="profile-image" />
          <h6 className="card-title">Jenny Wilson</h6>
        </div>
        <Rating initialValue={4} readonly size={20} />
        <p className="card-text">The food was excellent and so was the service. I had the mushroom risotto with scallops
          which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious
          about gluten allergies.
        </p>
        <small className="text-muted"></small>
      </div>
      <div className="card-body">
        <div className="profile">
          <img src={profile} alt="Dianne Russell" className="profile-image" />
          <h6 className="card-title">Dianne Russell</h6>
        </div>
        <Rating initialValue={5} readonly size={20} />
        <p className="card-text">We enjoyed the eggs Benedict served on homemade focaccia and hot coffee. Perfect service.</p>
        <small className="text-muted"></small>
      </div>
      <div className="card-body">
        <div className="profile">
          <img src={profile} alt="Devon Lane" className="profile-image" />
          <h6 className="card-title">Devon Lane</h6>
        </div>
        <Rating initialValue={4} readonly size={20} />
        <p className="card-text">Normally wings are wings, but theirs are lean meaty and tender, and they have a special
          chili-lime dry rub that makes them my favorite.
        </p>
        <small className="text-muted"></small>
      </div>
    </div>
  );
};

export default Feedback;
