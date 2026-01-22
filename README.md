# Full-Stack Technical Assessment

A minimal flashcard application built with Node.js/Express and React/TypeScript.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# Install all dependencies
npm install && cd client && npm install && cd ../server && npm install && cd ..
```

### Running the Application

```bash
npm run dev
```

This starts both servers:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

---

## Assessment Instructions

**Time limit: 1 hour**

| Part | Suggested Time |
|------|---------------|
| Setup + explore codebase | 5-10 min |
| Part 1: Bug fix | 10-15 min |
| Part 2: Feature implementation | 35-40 min |

---

### Part 1: Bug Fix (Warmup)

There is a bug in the application. The **delete flashcard** functionality is broken.

**Your task:**
1. Reproduce the bug by trying to delete a flashcard in the UI
2. Investigate and identify the root cause
3. Fix the bug
4. Verify the fix works

**Hints:**
- The bug is in the backend code
- Check the network requests in your browser's developer tools
- Compare the delete endpoint implementation with similar endpoints

---

### Part 2: New Feature (Main Challenge)

Add a **Study Session Results** feature to the application.

**Requirements:**

1. **Track answers during study mode**
   - After revealing the answer (flipping the card), the user should be able to mark whether they got it **correct** or **wrong**
   - Add two buttons: "Got it" (correct) and "Missed it" (wrong)
   - The user must select one before moving to the next card

2. **Display results after completing all cards**
   - After the user has gone through ALL cards in the deck, show a results summary
   - The summary should display:
     - Total number of cards studied
     - Number of correct answers
     - Number of wrong answers
     - Percentage score
   - Include a "Study Again" button to restart the session

3. **UX Considerations**
   - The correct/wrong buttons should only appear after the card is flipped
   - Make it clear which cards have been answered
   - The results screen should be visually distinct from the study cards

**Acceptance Criteria:**
- [ ] User can mark each card as correct or wrong after flipping
- [ ] User cannot skip a card without marking it
- [ ] Results screen appears after all cards are completed
- [ ] Results show correct count, wrong count, and percentage
- [ ] User can restart the study session from results screen

**Bonus (if time permits):**
Add a "Review Mistakes" button on the results screen that lets users flip through only the cards they got wrong.

**Evaluation Criteria:**
- Code quality and TypeScript usage
- Component structure and state management
- User experience and edge case handling
- CSS/styling consistency with existing design

---

## Tech Stack

- **Backend**: Node.js + Express + TypeScript
- **Frontend**: React + TypeScript + Vite
- **Data Store**: In-memory (no database)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/flashcards` | Get all flashcards |
| GET | `/api/flashcards/:id` | Get single flashcard |
| POST | `/api/flashcards` | Create flashcard |
| PUT | `/api/flashcards/:id` | Update flashcard |
| DELETE | `/api/flashcards/:id` | Delete flashcard |

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── api/            # API client
│   │   └── types/          # TypeScript types
│   └── ...
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── data/           # In-memory store
│   │   └── types/          # TypeScript types
│   └── ...
└── package.json            # Root package with scripts
```
