import { useState, useEffect } from "react";
import "../main.css";

function ShuffleText({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseAfterTyping = 1000,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && display.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplay(currentWord.slice(0, display.length + 1));
      }, typingSpeed);
    } 
    else if (!isDeleting && display.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    } 
    else if (isDeleting && display.length > 0) {
      timeout = setTimeout(() => {
        setDisplay(currentWord.slice(0, display.length - 1));
      }, deletingSpeed);
    } 
    else if (isDeleting && display.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseAfterTyping]);

  return (
    <h1 className="shuffleText">
      {display}
      <span className="cursor">‎</span>
    </h1>
  );
}

export default ShuffleText;