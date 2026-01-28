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
| Warmup | 5 min |
| Part 1: Bug fixes | 20-25 min |
| Part 2: Feature implementation | 30-35 min |

---

### Warmup (5 minutes)

Get familiar with the codebase by completing this small task:

**Task:** Add a character count display to the flashcard creation form.

**Requirements:**
- Show the current character count for both the "Front" and "Back" text fields
- Display format: "X characters"
- Update in real-time as the user types

**Acceptance Criteria:**
- [ ] Character count visible for front field
- [ ] Character count visible for back field
- [ ] Count updates as user types

---

### Part 1: Bug Fixes (20-25 minutes)

The **delete flashcard** functionality is broken. There are **2 bugs** causing this - one in the backend and one in the frontend.

**Your task:**
1. Try to delete a flashcard
2. Notice it appears to work... but does it really?
3. Find and fix BOTH bugs
4. Verify the fix works correctly

**Acceptance Criteria:**
- [ ] Delete functionality actually removes the card from the server
- [ ] Errors are properly shown to the user when operations fail
- [ ] UI stays in sync with the backend

---

### Part 2: Batch Study Operations API (30-35 minutes)

Implement a single **batch operations endpoint** that processes multiple study actions in one request.

**Endpoint:** `POST /api/study/batch`

**Request format:**
```json
{
  "sessionId": "optional-for-existing-session",
  "operations": [
    { "type": "start", "cardIds": ["1", "2", "3"] },
    { "type": "answer", "cardId": "1", "result": "correct" },
    { "type": "complete" }
  ]
}
```

**Requirements:**

1. **Backend: Operation Processing**
   - Process operations in sequence
   - Validate operation order (`start` first, `complete` only when all answered)
   - Reject invalid operations (unknown cardId, duplicate answer, etc.)
   - Return session state and any errors

2. **Backend: Validation Rules**
   - Cannot `answer` before `start` (unless sessionId provided)
   - Cannot `answer` same card twice
   - Cannot `complete` with unanswered cards
   - Handle edge cases: empty array, invalid types, missing fields

3. **Frontend: Integration**
   - Add "Got it" / "Missed it" buttons after card flip
   - Send batch operation on each answer
   - Display results when session complete
   - "Study Again" starts new session

**Acceptance Criteria:**
- [ ] Batch endpoint processes operations correctly
- [ ] Invalid operations return meaningful errors
- [ ] Frontend tracks answers via batch API
- [ ] Results screen shows stats (total, correct, wrong, %)
- [ ] Full flow works: start → answer all → complete → results

**Evaluation Criteria:**
- API design and error handling
- Validation logic completeness
- State management approach
- How candidate breaks down the problem

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
| POST | `/api/study/batch` | Batch study operations |

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
