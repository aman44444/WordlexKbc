import { fireEvent, render, screen } from "@testing-library/react";
import ScratchRewardCard from "./Scratchcard";

test("mouse coordinates of zero are valid and reward waits for half the pixels", () => {
  const pixels = new Uint8ClampedArray(400).fill(255);
  const ctx = { fillRect: jest.fn(), beginPath: jest.fn(), arc: jest.fn(), fill: jest.fn(),
    getImageData: jest.fn(() => ({ data: pixels })) };
  const spy = jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(ctx);
  const { container } = render(<ScratchRewardCard />);
  const canvas = container.querySelector("canvas");
  canvas.width = 10;
  canvas.height = 10;
  canvas.getBoundingClientRect = () => ({ left: 0, top: 0, width: 10, height: 10 });
  fireEvent.mouseMove(canvas, { clientX: 0, clientY: 0 });
  expect(ctx.arc).toHaveBeenCalledWith(0, 0, 20, 0, 2 * Math.PI);
  expect(screen.getByText("Scratch to Reveal")).toBeTruthy();
  for (let i = 0; i < 51; i++) pixels[i * 4 + 3] = 0;
  fireEvent.touchMove(canvas, { touches: [{ clientX: 0, clientY: 0 }] });
  expect(screen.getByText(/Congratulations/)).toBeTruthy();
  spy.mockRestore();
});
