import { renderHook, act } from "@testing-library/react";
import { useHeader } from "./useHeader";

describe("useHeader", () => {
  it("should return initial isOpen state as falsy", () => {
    const { result } = renderHook(() => useHeader());

    expect(result.current.isOpen).toBe(false);
  });

  it("toggles state correctly", () => {
    const { result } = renderHook(() => useHeader());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.handleOpenMenu();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.handleOpenMenu();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
