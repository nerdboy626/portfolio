import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Nicolas Caminero | Fullstack Developer",
  description: "Nicolas Caminero's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-pt-16">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          expand
          closeButton
          toastOptions={{
            classNames: {
              toast: "toast-base",
              title: "toast-title",
              description: "toast-description",
              actionButton: "toast-action",
              cancelButton: "toast-cancel",
              success: "toast-success",
              error: "toast-error",
              warning: "toast-warning",
            },
          }}
        />
      </body>
    </html>
  );
}
