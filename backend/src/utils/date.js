export const addMinutes = (minutes) => {
  return new Date(Date.now() + minutes * 60 * 1000);
};