# Phase 2.1: Build QuestionDisplay Component & Question Type Components

## Description
Refine the QuestionDisplay component architecture to support multiple question types as purely presentational components. Each question type (Multiple Choice, Free Text, Music, Image) will have its own dedicated presentational component. The Header component will display the question/round counter, and the Timer will be positioned absolutely in the bottom right corner.

## Data Structure: Question Types

Define these question types in `src/types/quiz.ts`:

```typescript
type QuestionType = 'multiple-choice' | 'free-text' | 'music' | 'image'

interface Question {
  id: string
  text: string
  type: QuestionType
  answer: string
  questionNumber: number
}
```

## Data Structure: CurrentState

Define the complete state object received from the backend in `src/types/quizState.ts`:

```typescript
interface CurrentState {
  stateId: number
  round?: number
  totalRounds?: number
  currentQuestion: Question | null
  totalQuestions?: number
  teams: Team[]
  status: 'not-started' | 'in-progress' | 'paused' | 'ended'
  isAnswerRevealed?: boolean
  isScoreBoardShown?: boolean
  isTimerStarted?: boolean
  intermediateSumRound?: number
}

interface Team {
  id: string
  name: string
  score: RoundScore[]
}

interface RoundScore {
    round: number
    score: number
}
```

## Component Architecture

### 1. Header Component Updates
Update `src/components/quiz/Header.tsx` to display:
- Quiz title
- Round counter: "Round 3 of 10"
- Question counter: "Question 1 of 6"

**Props:**
```typescript
interface HeaderProps {
  title?: string
  currentRound?: number
  totalRounds?: number
  currentQuestion?: number
  totalQuestions?: number
}
```

### 2. QuestionDisplay Component (Container)
Update `src/components/quiz/QuestionDisplay.tsx`:
- Acts as a wrapper/router for different question types
- Selects the appropriate child component based on question type
- Passes question data down to specific type components
- Purely presentational (no interactivity)

**Props:**
```typescript
interface QuestionDisplayProps {
  question: Question | null
  isAnswerRevealed?: boolean
}
```

**Rendering Logic:**
```typescript
switch (question?.type) {
  case 'multiple-choice':
    return <MultipleChoiceDisplay question={question} />
  case 'free-text':
    return <FreeTextDisplay question={question} />
  case 'music':
    return <MusicDisplay question={question} />
  case 'image':
    return <ImageDisplay question={question} />
  default:
    return <div>No question available</div>
}
```

### 3. Type-Specific Components

#### MultipleChoiceDisplay
File: `src/components/quiz/types/MultipleChoiceDisplay.tsx`
- Display question text (large font, min 28px)
- Show options as cards (A, B, C, D labels)
- Visual styling only (no click handlers)
- Highlight revealed answer if applicable

**Props:**
```typescript
interface MultipleChoiceDisplayProps {
  question: Question
  isAnswerRevealed?: boolean
}
```

#### FreeTextDisplay
File: `src/components/quiz/types/FreeTextDisplay.tsx`
- Display question text (large font, min 28px)
- Show placeholder text area (disabled/read-only display)
- No input capability - purely visual

**Props:**
```typescript
interface FreeTextDisplayProps {
  question: Question
  isAnswerRevealed?: boolean
}
```

#### MusicDisplay
File: `src/components/quiz/types/MusicDisplay.tsx`
- Display question text
- Show audio player (display only, auto-play on start)
- Audio URL from backend
- Visual indicator for music question type

**Props:**
```typescript
interface MusicDisplayProps {
  question: Question
  isAnswerRevealed?: boolean
}
```

#### ImageDisplay
File: `src/components/quiz/types/ImageDisplay.tsx`
- Display question text
- Show image from `question.image` URL
- Responsive sizing for large screen display
- Image quality optimized for big screens

**Props:**
```typescript
interface ImageDisplayProps {
  question: Question
  isAnswerRevealed?: boolean
}
```

### 4. Timer Component Positioning
Update `src/components/quiz/Timer.tsx`:
- Position absolutely in bottom right corner
- Display time remaining (SS format)
- Visual warning when time is low (<10 seconds)
- Countdown animation
- Should start countdown animation to 0 when start prop changes
- Should play a sound when reaches zero
- Should play a sound when started

**Styling:**
```html
<!-- Absolute positioning -->
<div class="fixed bottom-8 right-8 z-10">
  <!-- Timer content -->
</div>
```

**Props:**
```typescript
interface TimerProps {
  time: number 
  start: boolean
}
```

## MainQuizPage Structure

The MainQuizPage should:
1. Receive `CurrentState` from backend (via WebSocket)
2. Pass appropriate data to child components:
   - `Header`: round info and question info
   - `QuestionDisplay`: current question
   - `Scoreboard`: teams and scores
   - `Timer`: time remaining
3. Render layout with absolute positioned timer


## Implementation Steps

1. Create `src/types/quizState.ts` with `CurrentState` and `Question` interfaces
2. Update `src/types/quiz.ts` to include question type definitions
3. Update `src/components/quiz/Header.tsx` to display round and question counters
4. Create `src/components/quiz/types/` directory
5. Create type-specific display components:
   - `MultipleChoiceDisplay.tsx`
   - `FreeTextDisplay.tsx`
   - `MusicDisplay.tsx`
   - `ImageDisplay.tsx`
6. Update `src/components/quiz/QuestionDisplay.tsx` as a router component - to show either question, or a scoreboard based in the state
7. Update `src/components/quiz/Timer.tsx` with absolute positioning
8. Update `src/pages/MainQuizPage.tsx` with the new structure

## Key Considerations
- **Presentational Only**: No interactivity in quiz components - state managed from backend
- **Large Screen Display**: Use large fonts and proper spacing for readability
- **Type Safety**: Strongly type all component props and state
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Scalability**: Easy to add new question types by creating new components
- **Timer Positioning**: Fixed absolute positioning ensures visibility above all content
- **Data Flow**: One-way data flow from backend state to components
