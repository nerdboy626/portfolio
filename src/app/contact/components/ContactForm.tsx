"use client";

import { useState } from "react";
import { toast } from "sonner";
import { fadeUpClass } from "@/app/lib/animation";

type ContactFormProps = {
  isVisible: boolean;
};

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm({ isVisible }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong while sending your message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className={`w-full max-w-2xl ${fadeUpClass(
        isVisible,
        "delay-150",
        "translate-y-24",
      )}`}
    >
      <div className="rounded-[28px] border border-border/50 bg-card/75 p-6 md:p-8 shadow-lg backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-2"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="mt-2"
              required
            />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What would you like to talk about?"
              className="mt-2"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="mt-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="btn btn-primary"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
