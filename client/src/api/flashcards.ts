import { Flashcard, CreateFlashcardInput, UpdateFlashcardInput } from '../types';

const API_BASE = '/api/flashcards';

export const flashcardsApi = {
  getAll: async (): Promise<Flashcard[]> => {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error('Failed to fetch flashcards');
    return response.json();
  },

  getById: async (id: string): Promise<Flashcard> => {
    const response = await fetch(`${API_BASE}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch flashcard');
    return response.json();
  },

  create: async (input: CreateFlashcardInput): Promise<Flashcard> => {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (!response.ok) throw new Error('Failed to create flashcard');
    return response.json();
  },

  update: async (id: string, input: UpdateFlashcardInput): Promise<Flashcard> => {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (!response.ok) throw new Error('Failed to update flashcard');
    return response.json();
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete flashcard');
  },
};
