# Phase 2.2: Build Scoreboard Component

## Description
Refine the Scoreboard component to display a matrix table showing team scores across all rounds. The table includes an intermediate sum column after a specified round, and a final total column.

## Data Structure: Scoreboard Data

Extend `src/types/quizState.ts` with scoring data:

```typescript
interface ScoreData {
  teamId: string
  roundScores: number[]  // Array of scores, one per round
  intermediateSum?: number  // Sum up to intermediateSumRound
  totalScore: number  // Final sum across all rounds
}

interface ScoringState {
  teams: Team[]
  scoreData: ScoreData[]
  currentRound: number
  totalRounds: number
  intermediateSumRound: number  // Round after which to show intermediate sum (e.g., 5)
}
```

## Scoreboard Table Structure

The scoreboard is a matrix table with:
- **Rows**: Teams (sorted by total score, highest first)
- **Columns**: 
  - Team Name (fixed/sticky)
  - Round 1, Round 2, ... Round N
  - Intermediate Sum (after `intermediateSumRound`)
  - Total Sum

### Example Table Layout
```
| Team Name  | R1 | R2 | R3 | R4 | R5 | INTERIM | R6 | R7 | R8 | TOTAL |
|------------|----|----|----|----|----|---------|----|----|----|-------|
| Team Alpha | 10 | 20 | 15 | 25 | 30 |   100   | 20 | 15 | 10 | 210   |
| Team Beta  |  8 | 18 | 20 | 15 | 25 |    86   | 25 | 20 | 15 | 204   |
| Team Gamma |  5 | 15 | 10 | 20 | 15 |    65   | 30 | 25 | 20 | 190   |
```

## Component Implementation

### Component Props
```typescript
interface ScoreboardProps {
  teams: Team[]
  scoreData: ScoreData[]
  currentRound: number
  totalRounds: number
  intermediateSumRound: number
}
```

### Component Structure

1. **Header Row**:
   - Team Name column
   - Round columns (R1, R2, ... RN)
   - Intermediate Sum column (styled differently - e.g., background color)
   - Total Sum column

2. **Data Rows**:
   - One row per team, sorted by total score descending
   - Each cell displays the score for that round
   - Intermediate sum calculated: sum of scores up to `intermediateSumRound`
   - Total sum calculated: sum of all round scores

3. **Visual Styling**:
   - Use Tailwind CSS table styling
   - Large readable fonts (min 18px for team names, 20px+ for scores)
   - Intermediate Sum column: distinctive background color (e.g., light gray or accent color)
   - Total Sum column: prominent styling (bold, different background color)
   - Row highlighting for top 3 teams (subtle background)
   - Borders between columns for clarity

4. **Rendering Logic**:
   - Calculate intermediate sum: `scoreData[i].roundScores.slice(0, intermediateSumRound).reduce((a,b) => a+b, 0)`
   - Calculate total sum: `scoreData[i].totalScore` (or sum all scores)
   - Show only rounds up to `currentRound` (or all rounds if quiz is ended)
   - Display empty cells for future rounds (not yet played)

## Implementation Steps

2. Update `src/types/quizState.ts` with `ScoreData` and `ScoringState` interfaces
3. Refactor Scoreboard component structure to be a matrix table
4. Implement table rendering with team rows and round columns
5. Add sticky positioning for team name column
6. Style intermediate sum column distinctively
7. Style total sum column with prominence
8. Handle display logic for current vs future rounds
9. Sort teams by total score (highest first)

## Key Considerations
- **Intermediate Sum**: Visually distinct from regular round columns (background color)
- **Total Sum**: Most prominent styling (bold, larger font, distinctive color)
- **Future Rounds**: Display as "-" or empty for rounds not yet played
- **Large Screen Display**: Ensure readability with appropriate font sizes and spacing
