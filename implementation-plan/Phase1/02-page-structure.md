# Phase 1.2: Create Basic Page Structure

## Description
Set up the skeletal structure for all three main pages with placeholder layouts. Establish the fundamental layout grid/sections.

## Implementation Steps
1. Create `src/pages/` directory structure

2. **HomePage.tsx** - Structure:
   - Centered layout
   - Two large buttons: "Admin Panel" and "Quiz"

3. **MainQuizPage.tsx** - Structure:
   - Header section (current round, question number)
   - Main content area (question display space)
   - Responsive layout (consider mobile view)

4. **AdminPanel.tsx** - Structure:
   - Sidebar (section navigation, no top navigation)
   - Main content area (changes based on selected section)
   - Use layout grid system

5. Create placeholder sub-pages in `src/pages/admin/`:
   - `QuizManagement.tsx`
   - `InstanceControl.tsx`
   - `TeamManagement.tsx`

6. Use simple `<div>` containers with comments indicating content zones
   - Avoid styling in this step (CSS next)

## Acceptance Criteria
- [x] HomePage.tsx renders with two buttons (Admin and Quiz)
- [x] Buttons navigate to `/admin` and `/quiz` routes
- [x] MainQuizPage.tsx renders with header and content sections
- [x] AdminPanel.tsx renders with sidebar and main content area
- [x] All admin sub-pages are created and route properly
- [x] Content zones are clearly marked with comments
