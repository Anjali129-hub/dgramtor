"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Dgramtor Logo"
            width={56}
            height={56}
            priority
            className="rounded-xl object-contain"
          />

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-wide text-white">
              DGRAMTOR
            </h1>

            <p className="text-xs text-green-400">
              Real Presence. Real Connection.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-green-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/request-demo"
            className="rounded-full bg-green-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 text-gray-300 transition hover:text-green-400"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/request-demo"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-green-500 px-6 py-3 text-center font-semibold text-black transition hover:bg-green-400"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}