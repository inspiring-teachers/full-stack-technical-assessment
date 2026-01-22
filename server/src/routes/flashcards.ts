import { Router, Request, Response } from 'express';
import { store } from '../data/store';
import { CreateFlashcardInput, UpdateFlashcardInput } from '../types';

const router = Router();

// GET /api/flashcards - Get all flashcards
router.get('/', (req: Request, res: Response) => {
  const flashcards = store.getAll();
  res.json(flashcards);
});

// GET /api/flashcards/:id - Get single flashcard
router.get('/:id', (req: Request, res: Response) => {
  const flashcard = store.getById(req.params.id);
  if (!flashcard) {
    return res.status(404).json({ error: 'Flashcard not found' });
  }
  res.json(flashcard);
});

// POST /api/flashcards - Create flashcard
router.post('/', (req: Request, res: Response) => {
  const { front, back } = req.body as CreateFlashcardInput;

  if (!front || !back) {
    return res.status(400).json({ error: 'Front and back are required' });
  }

  const flashcard = store.create({ front, back });
  res.status(201).json(flashcard);
});

// PUT /api/flashcards/:id - Update flashcard
router.put('/:id', (req: Request, res: Response) => {
  const { front, back } = req.body as UpdateFlashcardInput;

  const flashcard = store.update(req.params.id, { front, back });
  if (!flashcard) {
    return res.status(404).json({ error: 'Flashcard not found' });
  }
  res.json(flashcard);
});

// DELETE /api/flashcards/:id - Delete flashcard
router.delete('/:id', (req: Request, res: Response) => {
  const deleted = store.delete(req.body.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Flashcard not found' });
  }
  res.status(204).send();
});

export default router;
