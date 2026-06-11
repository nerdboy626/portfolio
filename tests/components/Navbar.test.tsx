import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../../src/app/components/Navbar";

vi.mock("../../src/app/components/DarkModeToggle", () => ({
  default: () => <div>Dark Mode Toggle</div>,
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navbar", () => {
  it("renders navigation links", () => {
    render(<Navbar />);

    expect(screen.getAllByText(/home/i)).toHaveLength(2);
    expect(screen.getAllByText(/about/i)).toHaveLength(2);
    expect(screen.getAllByText(/portfolio/i)).toHaveLength(2);
    expect(screen.getAllByText(/contact/i)).toHaveLength(2);
  });

  it("opens and closes mobile menu when hamburger is clicked", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    const openButton = screen.getByRole("button", {
      name: /open menu/i,
    });

    expect(openButton).toHaveAttribute("aria-expanded", "false");

    await user.click(openButton);

    expect(openButton).toHaveAttribute("aria-expanded", "true");

    const closeButton = screen.getByRole("button", {
      name: /close menu/i,
    });

    await user.click(closeButton);

    expect(closeButton).toHaveAttribute("aria-expanded", "false");
  });

  it("closes menu when clicking outside navbar", async () => {
    const user = userEvent.setup();

    render(
      <>
        <Navbar />
        <div data-testid="outside">Outside</div>
      </>,
    );

    const menuButton = screen.getByRole("button", {
      name: /open menu/i,
    });

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByTestId("outside"));

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
