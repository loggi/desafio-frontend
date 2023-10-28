import "@testing-library/jest-dom";

Object.defineProperty(window, "resizeTo", {
  value: (width, height) => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: width,
    });
    Object.defineProperty(window, "outerWidth", {
      configurable: true,
      writable: true,
      value: width,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      writable: true,
      value: height,
    });
    Object.defineProperty(window, "outerHeight", {
      configurable: true,
      writable: true,
      value: height,
    });
    window.dispatchEvent(new Event("resize"));
  },
});
