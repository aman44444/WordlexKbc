export function scoreGuess(guess, answer) {
  const letters = guess.toUpperCase().split("");
  const target = answer.toUpperCase();
  const remaining = {};
  const states = letters.map((letter, index) => {
    if (letter && letter === target[index]) return "correct";
    if (target[index]) remaining[target[index]] = (remaining[target[index]] || 0) + 1;
    return "error";
  });
  letters.forEach((letter, index) => {
    if (states[index] !== "correct" && remaining[letter] > 0) {
      states[index] = "almost";
      remaining[letter]--;
    }
  });
  return states;
}
