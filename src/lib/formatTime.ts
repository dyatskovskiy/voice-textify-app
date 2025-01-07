export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600); // Часы
  const minutes = Math.floor((seconds % 3600) / 60); // Минуты
  const secs = seconds % 60; // Секунды

  let result = "";
  if (hours > 0) result += `${hours}h `;
  if (minutes > 0 || hours > 0) result += `${minutes}m `;
  result += `${secs}s`;

  return result.trim();
};
