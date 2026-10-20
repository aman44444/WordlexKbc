import React from "react";
import { act, render, renderHook, fireEvent, screen } from "@testing-library/react";
import useKeyState from "./useKeyState";
import { GameProvider, useGame } from "../Context/GameContext";
import Keyboard from "../components/game/Keyboard/Keyboard";

jest.mock("./useWordGenerator", () => ({
  __esModule: true,
  default: () => {
    const [correctWord, setCorrectWord] = require("react").useState("APPLE");
    return { correctWord, setCorrectWord, wordSet: new Set(["APPLE"]), setWordSet: jest.fn() };
  },
}));
jest.mock("./useGameActions", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("../components/game/Keyboard/Key", () => () => null);

beforeEach(() => localStorage.clear());
afterEach(() => jest.useRealTimers());

test("wrong guesses update keyboard and removing rows clears feedback", () => {
  const board = ["ALLEY".split("")];
  const { result, rerender } = renderHook(({ attempt, answer }) => useKeyState(answer, board, attempt),
    { initialProps: { attempt: 1, answer: "APPLE" } });
  expect(result.current.keyState.l).toBe("almost");
  expect(result.current.disabledLetters).toEqual(["Y"]);
  rerender({ attempt: 0, answer: "YOUTH" });
  expect(result.current.keyState).toEqual({});
  expect(result.current.disabledLetters).toEqual([]);
});

test("keyboard keeps the strongest clue across guesses", () => {
  const { result } = renderHook(() => useKeyState("APPLE", ["APPLE".split(""), "ALLEY".split("")], 2));
  expect(result.current.keyState.l).toBe("correct");
});

function Probe() {
  const game = useGame();
  return <><input aria-label="Email" /><output data-testid="attempt">{game.currAttempt.letter}</output><Keyboard /></>;
}

test("form and modal input do not reach the game keyboard", () => {
  render(<GameProvider><Probe /></GameProvider>);
  fireEvent.keyDown(screen.getByLabelText("Email"), { key: "A" });
  expect(screen.getByTestId("attempt").textContent).toBe("0");
  const modal = document.createElement("div");
  modal.setAttribute("role", "dialog");
  document.body.appendChild(modal);
  fireEvent.keyDown(window, { key: "A" });
  expect(screen.getByTestId("attempt").textContent).toBe("0");
  modal.remove();
  fireEvent.keyDown(window, { key: "A" });
  expect(screen.getByTestId("attempt").textContent).toBe("1");
});

test("midnight remounts a clean game and saves the new date", () => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2026, 9, 20, 23, 59, 59));
  render(<GameProvider><Probe /></GameProvider>);
  fireEvent.keyDown(window, { key: "A" });
  expect(screen.getByTestId("attempt").textContent).toBe("1");
  act(() => jest.advanceTimersByTime(1100));
  expect(screen.getByTestId("attempt").textContent).toBe("0");
  const saved = JSON.parse(localStorage.getItem("wordleGame"));
  expect(saved.date).toBe(new Date().toDateString());
  expect(saved.board.flat().every((letter) => letter === "")).toBe(true);
});
