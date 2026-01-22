export interface Flashcard {
  id: string;
  front: string;
  back: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFlashcardInput {
  front: string;
  back: string;
}

export interface UpdateFlashcardInput {
  front?: string;
  back?: string;
}
