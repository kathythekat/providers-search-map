export default function splitSpecialties(s) {
  let split = [];
  for (let i = 0; i < s.length - 5; i++) {
    split.push(s.slice(i, i + 5));
  }
  return split;
}
