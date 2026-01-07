'use client'
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cur = 0;
    let pause = false
    const interval = setInterval(() => {
    if(pause) return;
    cur += 1;
    if(cur !== 0 && cur % 20 == 0)
    {
        pause = true;
        setTimeout(() => {
            pause = false;
        },3000);
    }
    setProgress(cur);
    if (cur >= 80) clearInterval(interval);
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
