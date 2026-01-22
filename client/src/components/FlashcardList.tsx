import { Flashcard } from '../types';
import { FlashcardCard } from './FlashcardCard';

interface FlashcardListProps {
  flashcards: Flashcard[];
  onEdit: (flashcard: Flashcard) => void;
  onDelete: (id: string) => void;
}

export function FlashcardList({ flashcards, onEdit, onDelete }: FlashcardListProps) {
  if (flashcards.length === 0) {
    return <p className="empty-message">No flashcards yet. Create one to get started!</p>;
  }

  return (
    <div className="flashcard-grid">
      {flashcards.map((flashcard) => (
        <FlashcardCard
          key={flashcard.id}
          flashcard={flashcard}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
