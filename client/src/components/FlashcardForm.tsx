import { useState, useEffect } from 'react';
import { Flashcard, CreateFlashcardInput } from '../types';

interface FlashcardFormProps {
  flashcard?: Flashcard | null;
  onSubmit: (data: CreateFlashcardInput) => void;
  onCancel: () => void;
}

export function FlashcardForm({ flashcard, onSubmit, onCancel }: FlashcardFormProps) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  useEffect(() => {
    if (flashcard) {
      setFront(flashcard.front);
      setBack(flashcard.back);
    } else {
      setFront('');
      setBack('');
    }
  }, [flashcard]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;
    onSubmit({ front: front.trim(), back: back.trim() });
    setFront('');
    setBack('');
  };

  return (
    <form className="flashcard-form" onSubmit={handleSubmit}>
      <h2>{flashcard ? 'Edit Flashcard' : 'Create Flashcard'}</h2>
      <div className="form-group">
        <label htmlFor="front">Question (Front)</label>
        <textarea
          id="front"
          value={front}
          onChange={(e) => setFront(e.target.value)}
          placeholder="Enter the question..."
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Answer (Back)</label>
        <textarea
          id="back"
          value={back}
          onChange={(e) => setBack(e.target.value)}
          placeholder="Enter the answer..."
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {flashcard ? 'Update' : 'Create'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
