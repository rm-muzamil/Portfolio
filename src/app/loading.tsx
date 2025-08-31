"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const texts = ["</>", "<RM/>", "<RM Muzammil/>"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const currentText = texts[index];

    if (forward && subIndex <= currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, subIndex));
        setSubIndex(subIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (!forward && subIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, subIndex));
        setSubIndex(subIndex - 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (forward && subIndex === currentText.length + 1) {
      setTimeout(() => setForward(false), 800);
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % texts.length);
    }
  }, [subIndex, forward, index, texts]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-4xl font-bold">
      {displayText}
      <span className="animate-blink">|</span>
      <style jsx>{`
        .animate-blink {
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
