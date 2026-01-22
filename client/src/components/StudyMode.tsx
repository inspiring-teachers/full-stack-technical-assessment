import { useState } from 'react';
import { Flashcard } from '../types';

interface StudyModeProps {
  flashcards: Flashcard[];
  onExit: () => void;
}

export function StudyMode({ flashcards, onExit }: StudyModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (flashcards.length === 0) {
    return (
      <div className="study-mode">
        <p>No flashcards to study. Add some cards first!</p>
        <button onClick={onExit} className="btn btn-secondary">
          Exit Study Mode
        </button>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];

  const goToNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const goToPrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="study-mode">
      <div className="study-header">
        <h2>Study Mode</h2>
        <span className="study-progress">
          Card {currentIndex + 1} of {flashcards.length}
        </span>
      </div>

      <div
        className={`study-card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="study-card-inner">
          <div className="study-card-front">
            <p>{currentCard.front}</p>
            <span className="flip-hint">Click to reveal answer</span>
          </div>
          <div className="study-card-back">
            <p>{currentCard.back}</p>
            <span className="flip-hint">Click to see question</span>
          </div>
        </div>
      </div>

      <div className="study-controls">
        <button onClick={goToPrevious} className="btn btn-secondary">
          Previous
        </button>
        <button onClick={onExit} className="btn btn-secondary">
          Exit
        </button>
        <button onClick={goToNext} className="btn btn-secondary">
          Next
        </button>
      </div>
    </div>
  );
}
