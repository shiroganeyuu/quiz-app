# Quiz App Frontend - Implementation Plan

## Overview
A two-page quiz application where:
- **Main Quiz Page**: Displays quiz questions and scoreboard (shown on big screen)
- **Admin Panel**: Manages quizzes, instances, teams, and answers (run on host laptop)

The host controls quiz progression from admin panel, which updates the main screen in real-time.

---

## Page 1: Main Quiz Page

### Purpose
Display current quiz state to participants. Read-only view updated by admin actions.

### Components/Features
1. **Question Display**
   - Current question text
   - Question type (multiple choice, true/false, short answer, etc.)
   - Visual formatting for readability
   - Question counter (e.g., "Question 3 of 10")

2. **Answer Options** (if applicable)
   - Display multiple choice options (A, B, C, D, etc.)
   - Show/hide based on question type
   - Visual indicators (maybe color-coded when answers are revealed)

3. **Scoreboard**
   - List of teams with current scores
   - Ranking/sorting by score
   - Optional: Update animation when scores change

4. **Timer**
   - Countdown timer for each question
   - Visual indicator when time is running out

5. **Status Indicators**
   - Quiz started/paused/ended state

### Data Structure
```
Quiz {
  id: string
  title: string
  currentQuestion: Question
  questionIndex: number
  totalQuestions: number
  teams: Team[]
  status: 'not-started' | 'in-progress' | 'paused' | 'ended'
}

Question {
  id: string
  text: string
  type: 'multiple-choice' | 'true-false' | 'short-answer'
  options?: string[]
  correctAnswer?: string | number
  timeLimit?: number
}

Team {
  id: string
  name: string
  score: number
}
```

---

## Page 2: Admin Panel

### Purpose
Control quiz progression, manage teams, enter answers, and view quiz state.

### Sections/Features

#### A. Quiz Management
1. **Quiz List View**
   - List of all quizzes
   - Create new quiz button
   - Edit/delete quiz actions
   - Select quiz to use

2. **Quiz Instance Management**
   - Create new quiz instance (active session)
   - Select which quiz to instantiate
   - View all active instances
   - Start/pause/end instance

#### B. Team Management
1. **Add Teams**
   - Form to add team name
   - List of teams in current instance
   - Remove team option
   - Display team count

#### C. Question Navigation & Control
1. **Question Navigator**
   - List/preview of all questions in quiz
   - Current question indicator
   - Next/Previous/Jump to question buttons
   - Question text preview

2. **Answer Entry**
   - Display current question
   - For each team: input field to mark answer as correct/incorrect
   - Quick action buttons (Mark Correct/Incorrect)
   - Show correct answer after submission

#### D. Quiz Statistics
1. **Current Instance Stats**
   - Teams and their current scores
   - Questions answered/remaining
   - Time elapsed
   - Answer submission status per team

#### E. Navigation
1. **Main Navigation**
   - Tabs/buttons to switch between: Quiz Management, Current Instance, Team Management
   - Status indicator showing current quiz/instance

### Data Structure
```
Quiz {
  id: string
  title: string
  description?: string
  questions: Question[]
  createdAt: Date
}

QuizInstance {
  id: string
  quizId: string
  status: 'not-started' | 'in-progress' | 'paused' | 'ended'
  teams: Team[]
  currentQuestionIndex: number
  answers: Answer[]
  startedAt?: Date
  endedAt?: Date
}

Team {
  id: string
  name: string
  instanceId: string
}

Answer {
  id: string
  teamId: string
  questionId: string
  answer: string | boolean | number
  isCorrect: boolean
}
```

---

## Technical Architecture

### Page Structure
```
src/
├── pages/
│   ├── MainQuizPage.tsx       # Display quiz to participants
│   └── AdminPanel.tsx          # Control center for host
├── components/
│   ├── common/
│   │   ├── Navigation.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   ├── quiz/
│   │   ├── QuestionDisplay.tsx
│   │   ├── AnswerOptions.tsx
│   │   ├── Scoreboard.tsx
│   │   └── Timer.tsx
│   ├── admin/
│   │   ├── QuizManager.tsx
│   │   ├── TeamManager.tsx
│   │   ├── InstanceControl.tsx
│   │   ├── QuestionNavigator.tsx
│   │   ├── AnswerEntry.tsx
│   │   └── AdminStats.tsx
│   └── ...
├── hooks/
│   ├── useQuiz.ts
│   ├── useInstance.ts
│   └── ...
├── context/
│   ├── QuizContext.tsx        # Shared quiz state (or use store)
│   └── InstanceContext.tsx
├── services/
│   ├── quizService.ts         # API calls for quizzes
│   ├── instanceService.ts     # API calls for instances
│   ├── teamService.ts
│   └── answerService.ts
├── types/
│   ├── quiz.ts
│   ├── instance.ts
│   ├── team.ts
│   └── answer.ts
├── App.tsx
└── main.tsx
```

### Routing
- `/` or `/quiz` - Main Quiz Page
- `/admin` - Admin Panel
  - `/admin/quizzes` - Quiz Management
  - `/admin/instance` - Current Instance Control
  - `/admin/teams` - Team Management

### State Management Options
1. **React Context + useReducer** - Simple, built-in
2. **Zustand** - Lightweight, easy to learn
3. **Redux** - More scalable if app grows

*Decision: Start with Context + useReducer, migrate to Zustand if needed*

---

## Implementation Phases

### Phase 1: Project Setup & Layout
- [ ] Set up routing (React Router)
- [ ] Create basic page structure
- [ ] Build layout components (Navigation, Sidebar)
- [ ] Style with Tailwind CSS

### Phase 2: Main Quiz Page
- [ ] Build QuestionDisplay component
- [ ] Build Scoreboard component
- [ ] Implement state management for quiz display
- [ ] Add mock data for testing

### Phase 3: Admin Panel - Basic Structure
- [ ] Create admin main layout
- [ ] Build navigation tabs/sections
- [ ] Build Quiz List view
- [ ] Build Team Management section
- [ ] Add mock data

### Phase 4: Admin Panel - Quiz & Instance Management
- [ ] Quiz creation form
- [ ] Quiz instance creation
- [ ] Start/Pause/End instance controls
- [ ] Instance state management

### Phase 5: Admin Panel - Question & Answer Management
- [ ] Question navigator
- [ ] Answer entry interface
- [ ] Mark correct/incorrect buttons
- [ ] Statistics display

### Phase 6: Advanced Features
- [ ] Timer functionality

### Phase 7: Backend Integration
- [ ] Connect to API endpoints
- [ ] WebSocket setup for real-time updates
- [ ] Replace mock data with real data

---

## Technology Stack
- **Framework**: React 18 (via Vite)
- **Styling**: Tailwind CSS 
- **Routing**: React Router v6
- **State Management**: React Context + useReducer
- **HTTP Client**: Axios
- **WebSocket**: Socket.io 
- **Form Handling**: React Hook Form
- **Type Safety**: TypeScript

---

## Key Considerations

### Data Flow
1. Admin creates quiz (saved to backend)
2. Admin creates instance (backend creates instance with selected quiz)
3. Teams added to instance
4. Admin navigates through questions (updates instance in backend)
5. Main page listens for instance updates (polling or WebSocket)
6. Main page reflects current question and scores
7. Admin marks team answers as correct/incorrect

### Challenges & Solutions
| Challenge | Solution |
|-----------|----------|
| Sync between admin and main page | WebSocket or polling |
| Two separate browsers/machines | REST API backend |
| Team answer management | Centralized answer tracking |

### Design Notes
- Keep UI simple and readable (big screen display)
- Use large fonts on quiz page
- Responsive design for both laptop and big screen

