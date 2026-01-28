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

export type AnswerResult = 'correct' | 'wrong';

export type StudyOperation =
  | { type: 'start'; cardIds: string[] }
  | { type: 'answer'; cardId: string; result: AnswerResult }
  | { type: 'complete' };

export interface BatchStudyRequest {
  sessionId?: string;
  operations: StudyOperation[];
}

export interface OperationError {
  index: number;
  operation: string;
  error: string;
}

export interface BatchStudyResponse {
  sessionId: string;
  status: 'in_progress' | 'completed';
  processed: number;
  failed: number;
  errors: OperationError[];
  results: Record<string, AnswerResult>;
  summary: {
    total: number;
    correct: number;
    wrong: number;
    remaining: number;
  };
}
