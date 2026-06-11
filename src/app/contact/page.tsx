"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e15_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Let's Talk
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            Connect with our team to learn more about
            Dgramtor&apos;s holographic communication
            technology.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact Form */}
            <div className="rounded-3xl border border-green-500/20 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="mb-8 text-3xl font-bold">
                Send Us A Message
              </h2>

              <form
                action="https://formsubmit.co/arjunpanwar118102114@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission - Dgramtor"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000/contact?success=true"
                />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none transition focus:border-green-500"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none transition focus:border-green-500"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none transition focus:border-green-500"
                />

                <textarea
                  rows={6}
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none transition focus:border-green-500"
                />

                <button
                  type="submit"
                  className="rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <Mail className="mb-4 h-8 w-8 text-green-400" />

                <h3 className="mb-2 text-xl font-semibold">
                  Email
                </h3>

                <a
                  href="mailto:D.gramtor2830@gmail.com"
                  className="text-gray-400 hover:text-green-400"
                >
                  D.gramtor2830@gmail.com
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <Phone className="mb-4 h-8 w-8 text-green-400" />

                <h3 className="mb-2 text-xl font-semibold">
                  Phone
                </h3>

                <a
                  href="tel:+917302546289"
                  className="text-gray-400 hover:text-green-400"
                >
                  +91 7302546289
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <MapPin className="mb-4 h-8 w-8 text-green-400" />

                <h3 className="mb-2 text-xl font-semibold">
                  Location
                </h3>

                <p className="text-gray-400">
                  India
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <Clock className="mb-4 h-8 w-8 text-green-400" />

                <h3 className="mb-2 text-xl font-semibold">
                  Availability
                </h3>

                <p className="text-gray-400">
                  Monday - Saturday
                </p>

                <p className="text-gray-400">
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}