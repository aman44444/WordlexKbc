import React, {useRef, useEffect, useState } from 'react';
import '../style/./ScratchRewardCard.css';

const ScratchRewardCard = () => {
  const [isScratched, setScratched] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const context = canvas.getContext('2d');
    setCtx(context);

    context.fillStyle = '#a77e39';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleScratch = (e) => {
    if (!ctx) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left || e.touches[0].clientX - rect.left;
    const y = e.clientY - rect.top || e.touches[0].clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();

   
    const scratched = ctx.getImageData(0, 0, canvas.width, canvas.height).data.reduce((acc, val) => acc + (val === 0 ? 1 : 0), 0);
    if (scratched > (canvas.width * canvas.height) / 2) {
      setScratched(true);
    }
  };

  return (
    <div className="scratch-reward-card" ref={containerRef}>
      <div className="scratch-content">
        {isScratched ? (
          <div className="revealed-content">
            Congratulations! You've won a discount of 20% off!
          </div>
        ) : (
          <div className="scratch-text">Scratch to Reveal</div>
        )}
      </div>
      {!isScratched && (
        <canvas
          ref={canvasRef}
          className="scratch-area"
          onMouseMove={handleScratch}
          onTouchMove={handleScratch}
        />
      )}
    </div>
  );
};

export default ScratchRewardCard;
