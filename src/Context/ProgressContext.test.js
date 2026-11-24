import React from "react";
import { render, screen } from "@testing-library/react";
import { ProgressProvider, useProgress } from "./ProgressContext";

function Probe() {
  const { progress, currentDay } = useProgress();
  return (
    <>
      <output data-testid="day">{currentDay}</output>
      <output data-testid="progress">{progress.join(",")}</output>
    </>
  );
}

afterEach(() => {
  localStorage.clear();
  jest.useRealTimers();
});

test("missing a calendar day resets progress and lifelines", () => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2026, 9, 22, 12));
  localStorage.setItem(
    "progressData",
    JSON.stringify({
      progress: [100, 100, 0, 0, 0, 0, 0],
      currentDay: 3,
      lastPlayedDate: new Date(2026, 9, 20, 12).toDateString(),
    }),
  );
  localStorage.setItem("lifeline-doubledip", "true");
  localStorage.setItem("lifeline-fiftyfifty", "true");
  localStorage.setItem("lifeline-flip", "true");

  render(
    <ProgressProvider>
      <Probe />
    </ProgressProvider>,
  );

  expect(screen.getByTestId("day").textContent).toBe("1");
  expect(screen.getByTestId("progress").textContent).toBe("0,0,0,0,0,0,0");
  expect(localStorage.getItem("lifeline-doubledip")).toBeNull();
  expect(localStorage.getItem("lifeline-fiftyfifty")).toBeNull();
  expect(localStorage.getItem("lifeline-flip")).toBeNull();
});
