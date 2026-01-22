import { useState } from 'react';
import { Flashcard } from '../types';

interface FlashcardCardProps {
  flashcard: Flashcard;
  onEdit?: (flashcard: Flashcard) => void;
  onDelete?: (id: string) => void;
  showActions?: boolean;
}

export function FlashcardCard({ flashcard, onEdit, onDelete, showActions = true }: FlashcardCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this flashcard?')) {
      onDelete?.(flashcard.id);
    }
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{flashcard.front}</p>
        </div>
        <div className="flashcard-back">
          <p>{flashcard.back}</p>
        </div>
      </div>
      {showActions && (
        <div className="flashcard-actions" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => onEdit?.(flashcard)} className="btn btn-edit">
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-delete">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
