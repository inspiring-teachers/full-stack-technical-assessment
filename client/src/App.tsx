import { useState } from 'react';
import { useFlashcards } from './hooks/useFlashcards';
import { FlashcardList } from './components/FlashcardList';
import { FlashcardForm } from './components/FlashcardForm';
import { StudyMode } from './components/StudyMode';
import { Flashcard, CreateFlashcardInput } from './types';

type View = 'list' | 'form' | 'study';

function App() {
  const { flashcards, loading, error, createFlashcard, updateFlashcard, deleteFlashcard } = useFlashcards();
  const [view, setView] = useState<View>('list');
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null);

  const handleCreate = () => {
    setEditingCard(null);
    setView('form');
  };

  const handleEdit = (flashcard: Flashcard) => {
    setEditingCard(flashcard);
    setView('form');
  };

  const handleFormSubmit = async (data: CreateFlashcardInput) => {
    if (editingCard) {
      await updateFlashcard(editingCard.id, data);
    } else {
      await createFlashcard(data);
    }
    setEditingCard(null);
    setView('list');
  };

  const handleFormCancel = () => {
    setEditingCard(null);
    setView('list');
  };

  const handleDelete = async (id: string) => {
    await deleteFlashcard(id);
  };

  if (loading) {
    return <div className="container"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="container"><p className="error">Error: {error}</p></div>;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Flashcard App</h1>
        {view === 'list' && (
          <div className="header-actions">
            <button onClick={handleCreate} className="btn btn-primary">
              Create Card
            </button>
            <button onClick={() => setView('study')} className="btn btn-secondary">
              Study Mode
            </button>
          </div>
        )}
      </header>

      <main>
        {view === 'list' && (
          <FlashcardList
            flashcards={flashcards}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {view === 'form' && (
          <FlashcardForm
            flashcard={editingCard}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        )}

        {view === 'study' && (
          <StudyMode
            flashcards={flashcards}
            onExit={() => setView('list')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
