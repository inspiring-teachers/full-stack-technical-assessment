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
