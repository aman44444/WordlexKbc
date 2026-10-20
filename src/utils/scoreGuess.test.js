import { scoreGuess } from "./scoreGuess";

test("scores excess duplicates only once", () => {
  expect(scoreGuess("ALLEY", "APPLE")).toEqual(["correct", "almost", "error", "almost", "error"]);
});
test("reserves exact matches before misplaced duplicates", () => {
  expect(scoreGuess("PAPAL", "APPLE")).toEqual(["almost", "almost", "correct", "error", "almost"]);
});
test("scores a win", () => {
  expect(scoreGuess("APPLE", "APPLE")).toEqual(Array(5).fill("correct"));
});
