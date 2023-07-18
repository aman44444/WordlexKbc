import React, { useState } from 'react';


const ScratchRewardCard = () => {
  const [isScratched, setScratched] = useState(false);

  const handleScratch = () => {
    setScratched(true);
  };

  return (
    <div className="scratch-reward-card">
      <div
        className={`scratch-area ${isScratched ? 'scratched' : ''}`}
        onMouseMove={handleScratch}
        onTouchMove={handleScratch}
      >
        {isScratched ? (
          <div className="revealed-content">
            Congratulations! You've won a discount of 20% off!
          </div>
        ) : (
          <div className="scratch-text">Scratch to Reveal</div>
        )}
      </div>
    </div>
  );
};

export default ScratchRewardCard;