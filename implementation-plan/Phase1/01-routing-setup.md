# Phase 1.1: Set Up Routing (React Router)

## Description
Configure React Router v6 for the application with three main routes:
- `/` - Home Page (choose Admin or Quiz)
- `/quiz` - Main Quiz Page
- `/admin` - Admin Panel with sub-routes

## Implementation Steps
1. Install React Router v6
   ```bash
   npm install react-router-dom
   ```

2. Create page components (can be empty for now):
   - `src/pages/HomePage.tsx`
   - `src/pages/MainQuizPage.tsx`
   - `src/pages/AdminPanel.tsx`

3. Create route structure in `src/App.tsx`:
   - `<BrowserRouter>` as root
   - `<Routes>` with main routes
   - `<Route path="/" element={<HomePage />} />`
   - `<Route path="/quiz" element={<MainQuizPage />} />`
   - `<Route path="/admin/*" element={<AdminPanel />} />`

4. Add `<Outlet />` component in AdminPanel for sub-route rendering

5. Create nested routes for admin panel:
   - `/admin/quizzes` - Quiz Management
   - `/admin/instance` - Current Instance Control
   - `/admin/teams` - Team Management

## Acceptance Criteria
- [x] React Router dependency installed
- [x] App.tsx configured with BrowserRouter and Routes
- [x] Navigation between `/quiz` and `/admin` works
- [x] URL changes when navigating
- [x] Admin sub-routes are accessible (URLs load correctly)
