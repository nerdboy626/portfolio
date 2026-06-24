import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../../src/app/contact/components/ContactForm";

const { mockSuccess, mockError } = vi.hoisted(() => ({
  mockSuccess: vi.fn(),
  mockError: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    success: mockSuccess,
    error: mockError,
  },
}));

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("updates form fields when user types", async () => {
    const user = userEvent.setup();

    render(<ContactForm isVisible={true} />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);

    await user.type(nameInput, "Jane Doe");
    await user.type(emailInput, "jane@example.com");

    expect(nameInput).toHaveValue("Jane Doe");
    expect(emailInput).toHaveValue("jane@example.com");
  });

  it("submits the form successfully and resets", async () => {
    const user = userEvent.setup();

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
    } as Response);

    render(<ContactForm isVisible={true} />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/topic/i);
    const messageInput = screen.getByLabelText(/message/i);

    await user.type(nameInput, "Jane Doe");
    await user.type(emailInput, "jane@example.com");
    await user.type(subjectInput, "Portfolio Question");
    await user.type(messageInput, "Hello!");

    await user.click(
      screen.getByRole("button", {
        name: /send message/i,
      }),
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    expect(mockSuccess).toHaveBeenCalled();

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
      }),
    );

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(subjectInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });

  it("shows an error toast when submission fails", async () => {
    const user = userEvent.setup();

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    } as Response);

    render(<ContactForm isVisible={true} />);

    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/topic/i), "Portfolio Question");
    await user.type(screen.getByLabelText(/message/i), "Hello!");

    await user.click(
      screen.getByRole("button", {
        name: /send message/i,
      }),
    );

    await waitFor(() => {
      expect(mockError).toHaveBeenCalled();
    });
  });
});
