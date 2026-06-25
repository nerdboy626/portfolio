import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nico Caminero's Portfolio",
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
