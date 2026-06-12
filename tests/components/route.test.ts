import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "../../src/app/api/contact/route";

const { mockSend } = vi.hoisted(() => ({
  mockSend: vi.fn(),
}));

// Vitest must replace Resend with something that behaves like a constructable class
vi.mock("resend", () => {
  return {
    Resend: class {
      emails = {
        send: mockSend,
      };
    },
  };
});

// Also works
// vi.mock("resend", () => ({
//   Resend: vi.fn(function () {
//     return {
//       emails: {
//         send: mockSend,
//       },
//     };
//   }),
// }));

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 when required fields are missing", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "",
        email: "",
        subject: "",
        message: "",
      }),
    });

    const response = await POST(req);

    expect(response.status).toBe(400);

    const body = await response.json();

    expect(body).toEqual({
      error: "Missing required fields",
    });

    expect(mockSend).not.toHaveBeenCalled();
  });

  it("sends an email and returns 200", async () => {
    mockSend.mockResolvedValue({
      id: "email-123",
    });

    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        subject: "Portfolio Question",
        message: "Hello!",
      }),
    });

    const response = await POST(req);

    expect(response.status).toBe(200);

    expect(mockSend).toHaveBeenCalledTimes(1);

    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "caminero@alumni.stanford.edu",
        subject: "[Portfolio] Portfolio Question",
        html: expect.stringContaining("john@example.com"),
      }),
    );

    const body = await response.json();

    expect(body).toEqual({
      id: "email-123",
    });
  });

  it("returns 500 when resend throws an error", async () => {
    mockSend.mockRejectedValue(new Error("Resend API error"));

    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        subject: "Portfolio Question",
        message: "Hello!",
      }),
    });

    const response = await POST(req);

    expect(response.status).toBe(500);

    const body = await response.json();

    expect(body).toEqual({
      error: "Something went wrong",
    });
  });
});
