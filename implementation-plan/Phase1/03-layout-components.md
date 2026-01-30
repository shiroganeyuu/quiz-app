# Phase 1.3: Build Layout Components

## Description
Create page-specific layout components. Quiz page and Admin page have their own dedicated components.

## Implementation Steps
1. Create `src/components/` directory structure:
   - `src/components/quiz/` - Quiz page components
   - `src/components/admin/` - Admin page components

2. **Quiz Page Components** (`src/components/quiz/`):
   - QuestionDisplay.tsx
   - Scoreboard.tsx
   - Timer.tsx

3. **Admin Panel Components** (`src/components/admin/`):
   - Sidebar.tsx
   - QuizManager.tsx
   - TeamManager.tsx
   - InstanceControl.tsx
   - QuestionNavigator.tsx
   - AnswerEntry.tsx

4. Import and integrate components into pages:
   - MainQuizPage uses quiz components
   - AdminPanel uses admin components

## Acceptance Criteria
- [ ] Quiz page components directory created with all listed components
- [ ] Admin page components directory created with all listed components
- [ ] All components are TypeScript files with proper typing
