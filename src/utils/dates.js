export function toLocalDate(dateString) {
  return new Date(`${dateString}T00:00:00`);
}
