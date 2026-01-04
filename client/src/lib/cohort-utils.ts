import cohortsView from "../data/cohorts.json";

// Type alias just for clarity (it's just a string like "Nov'25")
export type CohortDate = string;

// The raw JSON map
export const cohorts = cohortsView as Record<string, CohortDate>;

/**
 * Helper to parse "MMM'YY" (e.g. "Nov'25") into a Date object.
 * Returns null if invalid.
 * Assumes the date is the 1st of that month.
 */
function parseCohortDate(dateStr: string): Date | null {
    try {
        const [monthStr, yearStr] = dateStr.split("'");
        if (!monthStr || !yearStr) return null;

        const monthIndex = new Date(`${monthStr} 1, 2000`).getMonth();
        // Assuming 'YY is 20YY.
        const fullYear = 2000 + parseInt(yearStr, 10);

        return new Date(fullYear, monthIndex, 1);
    } catch (e) {
        return null;
    }
}

/**
 * Returns the "nearest" cohort date string e.g. "Nov'25".
 * Logic:
 * 1. Parse all dates.
 * 2. Filter for dates >= today (start of current month).
 * 3. Sort ascending.
 * 4. Return the first one.
 * 5. If no future dates, maybe return the absolute latest one? 
 *    For now let's assume we want the nearest future one. 
 *    If all are past, we'll return the latest past one.
 */
export function getNearestCohortLine(): string {
    const today = new Date();
    // Reset to start of current month for fair comparison
    today.setDate(1);
    today.setHours(0, 0, 0, 0);

    const dates = Object.values(cohorts)
        .map(str => ({ str, date: parseCohortDate(str) }))
        .filter(item => item.date !== null) as { str: string, date: Date }[];

    if (dates.length === 0) return "";

    // Sort by date
    dates.sort((a, b) => a.date.getTime() - b.date.getTime());

    // Find first one that is >= today
    const upcoming = dates.find(d => d.date.getTime() >= today.getTime());

    if (upcoming) {
        return upcoming.str;
    }

    // Fallback: return the last one (latest date) if all are in the past
    return dates[dates.length - 1].str;
}
