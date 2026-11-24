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
  useProgress.mockReturnValue({ currentDay: day, setProgress: jest.fn(), setCurrentDay: jest.fn(), setLastPlayedDate: jest.fn() });
  const { result } = renderHook(() => useGameActions());
  act(() => result.current());
  expect(setGameOver).toHaveBeenCalledWith({ gameOver: true, guessedWord: true });
  expect(setPrize).toHaveBeenCalledTimes([3, 5, 7].includes(day) ? 1 : 0);
});

test("completing day 7 starts a fresh run and resets lifelines", () => {
  localStorage.setItem("lifeline-doubledip", "true");
  localStorage.setItem("lifeline-fiftyfifty", "true");
  localStorage.setItem("lifeline-flip", "true");

  const setProgress = jest.fn();
  const setCurrentDay = jest.fn();
  useGame.mockReturnValue({
    board: ["APPLE".split("")],
    currAttempt: { attempt: 0, letter: 5 },
    correctWord: "APPLE",
    wordSet: new Set(["APPLE"]),
    gameOver: { gameOver: false },
    setCurrAttempt: jest.fn(),
    setGameOver: jest.fn(),
  });
  useUI.mockReturnValue({ setAlert: jest.fn(), setPrize: jest.fn(), playWinSound: jest.fn() });
  useProgress.mockReturnValue({ currentDay: 7, setProgress, setCurrentDay, setLastPlayedDate: jest.fn() });

  const { result } = renderHook(() => useGameActions());
  act(() => result.current());

  expect(setProgress).toHaveBeenCalledWith(expect.any(Function));
  expect(setProgress.mock.calls[0][0]([100, 100, 100, 100, 100, 100, 100]))
    .toEqual([0, 0, 0, 0, 0, 0, 0]);
  expect(setCurrentDay).toHaveBeenCalledWith(expect.any(Function));
  expect(setCurrentDay.mock.calls[0][0](7)).toBe(1);
  expect(localStorage.getItem("lifeline-doubledip")).toBeNull();
  expect(localStorage.getItem("lifeline-fiftyfifty")).toBeNull();
  expect(localStorage.getItem("lifeline-flip")).toBeNull();
});
