'use client'
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
     let cur = 0;
  let pause = false;
  let loop = 0;
  let end = 0;
  let inLoopPause = false;

  const interval = setInterval(() => {
    if (loop >= 5) {
      setProgress(99);
      clearInterval(interval);
      return;
    }

    if (pause) return;

    cur += 1;
    setProgress(cur);

    if (cur % (20 + end) === 0 && cur < 80 + end && !inLoopPause) {
      pause = true;
      inLoopPause = true;

      setTimeout(() => {
        pause = false;
        inLoopPause = false;
      }, 1500);
    }

    if (cur >= 80 + end) {
      pause = true;

      setTimeout(() => {
        loop++;
        end += 4;
        cur = 0;
        if(loop < 5)
        setProgress(0);
        pause = false;
      }, 6000);
    }
  }, 100);
  return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm">
      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-white/80 text-right">
        {progress}%
      </p>
    </div>
  );
}
