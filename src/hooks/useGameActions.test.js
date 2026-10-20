import { act, renderHook } from "@testing-library/react";
import useGameActions from "./useGameActions";
import { useGame } from "../Context/GameContext";
import { useUI } from "../Context/UIContext";
import { useProgress } from "../Context/ProgressContext";

jest.mock("../Context/GameContext", () => ({ useGame: jest.fn() }));
jest.mock("../Context/UIContext", () => ({ useUI: jest.fn() }));
jest.mock("../Context/ProgressContext", () => ({ useProgress: jest.fn() }));

test.each([1, 2, 3, 4, 5, 6, 7])("day %i only awards milestone prizes", (day) => {
  const setPrize = jest.fn();
  const setGameOver = jest.fn();
  useGame.mockReturnValue({ board: ["APPLE".split("")], currAttempt: { attempt: 0, letter: 5 },
    correctWord: "APPLE", wordSet: new Set(["APPLE"]), gameOver: { gameOver: false },
    setCurrAttempt: jest.fn(), setGameOver });
  useUI.mockReturnValue({ setAlert: jest.fn(), setPrize, playWinSound: jest.fn() });
  useProgress.mockReturnValue({ currentDay: day, setProgress: jest.fn(), setCurrentDay: jest.fn() });
  const { result } = renderHook(() => useGameActions());
  act(() => result.current());
  expect(setGameOver).toHaveBeenCalledWith({ gameOver: true, guessedWord: true });
  expect(setPrize).toHaveBeenCalledTimes([3, 5, 7].includes(day) ? 1 : 0);
});
