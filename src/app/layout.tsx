import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nicolascaminero.com"),
  title: "Nicolas Caminero | Full Stack Developer",
  description:
    "Software engineering portfolio showcasing full stack projects built with React, Next.js, TypeScript, Node.js, PostgreSQL, and React Native.",
  openGraph: {
    title: "Nicolas Caminero | Full Stack Software Engineer",
    description:
      "Software engineering portfolio showcasing full stack projects built with React, Next.js, TypeScript, Node.js, PostgreSQL, and React Native.",
    url: "https://nicolascaminero.com",
    siteName: "Nicolas Caminero",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nicolas Caminero Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Caminero | Full Stack Software Engineer",
    description:
      "Software engineering portfolio showcasing full stack projects built with React, Next.js, TypeScript, Node.js, PostgreSQL, and React Native.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Analytics />
      </body>
    </html>
  );
}
