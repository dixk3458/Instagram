import { format } from 'timeago.js';

export function parseDate(date: string): string {
  return format(date);
}
