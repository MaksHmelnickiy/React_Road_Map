import { addDays, eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';

export const getWeekDaysOption = ({ startDay = 1, endDay = 1 } = {}): string[] => {
  const now = new Date();
  const arr = eachDayOfInterval({
    start: addDays(startOfWeek(now), startDay),
    end: addDays(endOfWeek(now), endDay),
  });

  return arr.reduce<string[]>((array, date) => {
    array.push(format(date, 'iiii'));
    return array;
  }, []);
};
