export default function shuffle(array) {
  let temp = [...array];
  return temp.sort(() => Math.random() - 0.5);
}
