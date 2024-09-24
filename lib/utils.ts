import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateTime } from "luxon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimestamp(timestamp: number) {
  const postDatetime = DateTime.fromJSDate(new Date(timestamp));
  const now = DateTime.fromJSDate(new Date());
  const diff = now.diff(postDatetime, ["weeks", "days", "hours", "minutes"]);

  if (diff.weeks > 1) {
    return `${Math.round(diff.weeks)}w`;
  } else if (diff.days > 1) {
    return `${Math.round(diff.days)}d`;
  } else if (diff.hours > 1) {
    return `${Math.round(diff.hours)}h`;
  } else {
    return `${Math.round(diff.minutes)}m`;
  }
}
