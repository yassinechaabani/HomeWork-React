
import './App.css';
import React, { useState } from 'react';
import TimeCard from './Components/timecard';
function App() {
  const [timeCardsData, setTimeCardsData] = useState([
    {
      name: 'Jeremy Robson',
      workHours: 32,
      playHours: 10,
      studyHours: 4,
      socialHours: 4,
      mentalHours: 5,
      selfCareHours: 2,
    },
  
  ]);

  function handleCardClick (name) {
    
   
  };
  return (
    <div>
    {timeCardsData.map((timeCardData) => (
      <TimeCard
        name={timeCardData.name}
        workHours={timeCardData.workHours}
        playHours={timeCardData.playHours}
        studyHours={timeCardData.studyHours}
        socialHours={timeCardData.socialHours}
        mentalHours={timeCardData.mentalHours}
        selfCareHours={timeCardData.selfCareHours}
        handleClick={handleCardClick}
      />
    ))}
  </div>
  );
}

export default App;
