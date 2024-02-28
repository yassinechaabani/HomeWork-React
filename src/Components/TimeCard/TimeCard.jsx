import React, { useState } from 'react';
import profilepicture from './src/assets/profile-picture.jpg'
import './TimeCard.css'
function TimeCard({ name, workHours, playHours, studyHours, socialHours, mentalHours, selfCareHours, handleClick }) {
  const [isClicked, setIsClicked] = useState(false); 

  function handleClick(){
    setIsClicked(!isClicked);
  };

  return (
    <div className="time-card" onClick={handleClick}>
      <div className="time-card-header">
        <img src={profilepicture} alt="Profile picture"  className="profile-picture"/>
        <h3>{name}</h3>
      </div>
      <div className="time-card-body">
        <div className="time-card-content">
          <p>Work</p>
          <p>{workHours} hrs</p>
        </div>
        <div className="time-card-content">
          <p>Play</p>
          <p>{playHours} hrs</p>
        </div>
        <div className="time-card-content">
          <p>Study</p>
          <p>{studyHours} hrs</p>
        </div>
       
        <div className="time-card-content">
              <p>Exercice</p>
              <p>{socialHours} hrs</p>
        </div>
        <div className="time-card-content">
              <p>Social</p>
              <p>{mentalHours} hrs</p>
        </div>
        <div className="time-card-content">
              <p>Self Care</p>
              <p>{selfCareHours} hrs</p>
        </div>
        
      </div>
    </div>
  );
}
