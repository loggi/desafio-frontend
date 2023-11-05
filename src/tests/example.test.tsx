import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

const ExampleTest = () => <div>Eu sou um texto: teste</div>;

describe("Example test", () => {
  test("should render page properly", () => {
    render(<ExampleTest />);

    expect(screen.getByText(/Eu sou um texto: teste/i)).toBeInTheDocument();
  });
});
