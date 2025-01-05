export const TIMES_DONE = "timesDone";
export const CLOCK_KEY = "clockPoints";
export const WORD_KEY = "wordPoints";
export type  ClockPoints = 0 | 2;
export const HISTORY = "history";


export interface HistorySnapshot {
  wordPoints: number;
  clockPoints: ClockPoints | undefined;
  date: string | Date;
  name: string;
}