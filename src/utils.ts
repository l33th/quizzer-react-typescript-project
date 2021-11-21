// Not completely accurate, but it'll do
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);