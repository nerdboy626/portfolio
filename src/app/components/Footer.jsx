import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] mb-10">
          {/* Brand Section */}
          <div className="max-w-md">
            <Link
              href="/"
              className="font-display text-2xl text-foreground no-underline"
            >
              NC
            </Link>

            <p className="mt-5 text-lg leading-8">
              Designing and developing thoughtful digital experiences through
              modern technologies, clean architecture, and purposeful
              problem-solving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-base font-medium">Quick Links</h4>

            <nav className="flex flex-col gap-4">
              <Link href="/" className="w-fit no-underline">
                Home
              </Link>

              <Link href="/about" className="w-fit no-underline">
                About
              </Link>

              <Link href="/portfolio" className="w-fit no-underline">
                Portfolio
              </Link>

              <Link href="/contact" className="w-fit no-underline">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="mb-5 text-base font-medium">Let&apos;s Connect</h4>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.1em] text-foreground-subtle">
                  Email
                </p>

                <Link
                  href="mailto:caminero@alumni.stanford.edu"
                  className="no-underline"
                >
                  caminero@alumni.stanford.edu
                </Link>
              </div>

              {/* Socials */}
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.1em] text-foreground-subtle">
                  Social Media
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    href="https://www.linkedin.com/in/nicolas-caminero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-2 no-underline"
                  >
                    <RxLinkedinLogo className="h-4 w-4" />
                    LinkedIn
                  </Link>

                  <Link
                    href="https://github.com/nerdboy626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-2 no-underline"
                  >
                    <SiGithub className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center border-t border-border pt-6 text-sm text-foreground-subtle ">
          <p>© 2026 Nicolas Caminero</p>
        </div>
      </div>
    </footer>
  );
}
