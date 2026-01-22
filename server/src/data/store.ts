import { Flashcard, CreateFlashcardInput, UpdateFlashcardInput } from '../types';

let flashcards: Flashcard[] = [
  {
    id: '1',
    front: 'What is React?',
    back: 'A JavaScript library for building user interfaces',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    front: 'What is TypeScript?',
    back: 'A typed superset of JavaScript that compiles to plain JavaScript',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    front: 'What is Express?',
    back: 'A minimal and flexible Node.js web application framework',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

let nextId = 4;

export const store = {
  getAll: (): Flashcard[] => {
    return [...flashcards];
  },

  getById: (id: string): Flashcard | undefined => {
    return flashcards.find((card) => card.id === id);
  },

  create: (input: CreateFlashcardInput): Flashcard => {
    const now = new Date().toISOString();
    const newCard: Flashcard = {
      id: String(nextId++),
      front: input.front,
      back: input.back,
      createdAt: now,
      updatedAt: now,
    };
    flashcards.push(newCard);
    return newCard;
  },

  update: (id: string, input: UpdateFlashcardInput): Flashcard | undefined => {
    const index = flashcards.findIndex((card) => card.id === id);
    if (index === -1) return undefined;

    const existing = flashcards[index];
    const updated: Flashcard = {
      ...existing,
      front: input.front ?? existing.front,
      back: input.back ?? existing.back,
      updatedAt: new Date().toISOString(),
    };
    flashcards[index] = updated;
    return updated;
  },

  delete: (id: string): boolean => {
    const index = flashcards.findIndex((card) => card.id === id);
    if (index === -1) return false;
    flashcards.splice(index, 1);
    return true;
  },
};
