import { useState, useEffect, useCallback } from 'react';
import { Flashcard, CreateFlashcardInput, UpdateFlashcardInput } from '../types';
import { flashcardsApi } from '../api/flashcards';

export function useFlashcards() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFlashcards = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await flashcardsApi.getAll();
      setFlashcards(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFlashcards();
  }, [fetchFlashcards]);

  const createFlashcard = useCallback(async (input: CreateFlashcardInput) => {
    const newCard = await flashcardsApi.create(input);
    setFlashcards((prev) => [...prev, newCard]);
    return newCard;
  }, []);

  const updateFlashcard = useCallback(async (id: string, input: UpdateFlashcardInput) => {
    const updated = await flashcardsApi.update(id, input);
    setFlashcards((prev) => prev.map((card) => (card.id === id ? updated : card)));
    return updated;
  }, []);

  const deleteFlashcard = useCallback(async (id: string) => {
    await flashcardsApi.delete(id);
    setFlashcards((prev) => prev.filter((card) => card.id !== id));
  }, []);

  return {
    flashcards,
    loading,
    error,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard,
    refetch: fetchFlashcards,
  };
}
