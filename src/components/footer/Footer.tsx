import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo & Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="Dgramtor Logo"
                width={60}
                height={60}
                className="rounded-xl object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold text-white">
                  DGRAMTOR
                </h3>

                <p className="text-xs text-green-400">
                  Real Presence. Real Connection.
                </p>
              </div>
            </div>

            <p className="mt-5 text-gray-400">
              Revolutionizing communication through immersive
              holographic technology for education, healthcare,
              enterprises, government and global collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Quick Links
            </h4>

            <div className="space-y-3 text-gray-400">
              <p>
                <Link
                  href="/"
                  className="transition hover:text-green-400"
                >
                  Home
                </Link>
              </p>

              <p>
                <Link
                  href="/product"
                  className="transition hover:text-green-400"
                >
                  Product
                </Link>
              </p>

              <p>
                <Link
                  href="/solutions"
                  className="transition hover:text-green-400"
                >
                  Solutions
                </Link>
              </p>

              <p>
                <Link
                  href="/about"
                  className="transition hover:text-green-400"
                >
                  About
                </Link>
              </p>

              <p>
                <Link
                  href="/contact"
                  className="transition hover:text-green-400"
                >
                  Contact
                </Link>
              </p>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Industries
            </h4>

            <div className="space-y-3 text-gray-400">
              <p>Education</p>
              <p>Healthcare</p>
              <p>Corporate</p>
              <p>Government</p>
              <p>Entertainment</p>
              <p>Real Estate</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Contact Us
            </h4>

            <div className="space-y-3 text-gray-400">
              <p>
                <a
                  href="mailto:D.gramtor2830@gmail.com"
                  className="transition hover:text-green-400"
                >
                  D.gramtor2830@gmail.com
                </a>
              </p>

              <p>
                <a
                  href="tel:+917302546289"
                  className="transition hover:text-green-400"
                >
                  +91 7302546289
                </a>
              </p>

              <p>India</p>

              <Link
                href="/request-demo"
                className="inline-block rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-green-400"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © 2026 Dgramtor Private Limited. All Rights Reserved.
            </p>

            <p className="text-sm text-green-400">
              Real Presence. Real Connection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}