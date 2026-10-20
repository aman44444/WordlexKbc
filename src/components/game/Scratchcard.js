import React, {useRef, useEffect, useState } from 'react';
import "../game/ScratchRewardCard.css"

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
    const point = e.touches?.[0] ?? e;
    const x = (point.clientX - rect.left) * canvas.width / rect.width;
    const y = (point.clientY - rect.top) * canvas.height / rect.height;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();

   
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let scratched = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) scratched++;
    }
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
