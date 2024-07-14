// import React, { useState, useEffect } from "react";

import { useTypewriter } from "../store/hooks/Typewriter";

// interface TypewriterProps {
//   text: string;
//   delay: number; 
//   infinite?: boolean;
// }

// export const Typewriter: React.FC<TypewriterProps> = ({
//   text,
//   delay,
//   infinite = false,
// }) => {
//   const lines = text.split("\n");
//   const [currentText, setCurrentText] = useState<string[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [lineIndex, setLineIndex] = useState(0);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;

//     if (lineIndex < lines.length) {
//       if (currentIndex < lines[lineIndex].length) {
//         timeout = setTimeout(() => {
//           setCurrentText((prevText) => {
//             const newText = [...prevText];
//             newText[lineIndex] =
//               (newText[lineIndex] || "") + lines[lineIndex][currentIndex];
//             return newText;
//           });
//           setCurrentIndex((prevIndex) => prevIndex + 1);
//         }, delay);
//       } else {
//         timeout = setTimeout(() => {
//           setCurrentIndex(0);
//           setLineIndex((prevIndex) => prevIndex + 1);
//         }, delay);
//       }
//     } else if (infinite) {
//       timeout = setTimeout(() => {
//         setCurrentText([]);
//         setCurrentIndex(0);
//         setLineIndex(0);
//       }, delay);
//     }

//     return () => clearTimeout(timeout);
//   }, [currentIndex, lineIndex, delay, infinite, lines]);
//   return (
//     <div className="w-max">
//       {currentText.map((line, index) => (
//         <h1
//           key={index}
//           className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black font-bold"
//         >
//           {line}
//         </h1>
//       ))}
//     </div>
//   );
// };
export const Typewriter = ({ text, speed }: any) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};
