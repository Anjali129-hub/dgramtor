import Image from "next/image";
import { Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e15_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            About Dgramtor
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Revolutionizing Human Communication
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            Dgramtor is building the future of communication through immersive
            holographic technology that makes remote interaction feel as natural
            as being physically present.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>
            <span className="text-green-400 font-semibold uppercase">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Bridging Distance Through Innovation
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Dgramtor was founded with a vision to eliminate the limitations
              of distance and create meaningful human connections through
              holographic communication.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Our technology enables organizations, educators, healthcare
              providers, and enterprises to communicate with life-like presence
              from anywhere in the world.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-green-500/10 blur-3xl" />

            <Image
              src="/images/about.jpeg"
              alt="About Dgramtor"
              width={900}
              height={700}
              className="relative z-10 rounded-3xl border border-white/10"
            />
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* HEADER */}
          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-green-400">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Mission & Vision
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-gray-400">
              We are building the future of communication through immersive
              holographic technology that makes every interaction feel real.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            {/* MISSION */}
            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-10 backdrop-blur-xl transition hover:border-green-500">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                <Target className="h-8 w-8 text-green-400" />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-6 text-gray-400 leading-8">
                To transform remote communication into immersive human
                experiences through holographic presence, enabling deeper
                collaboration and stronger connections worldwide.
              </p>
            </div>

            {/* VISION */}
            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-10 backdrop-blur-xl transition hover:border-green-500">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                <Eye className="h-8 w-8 text-green-400" />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-6 text-gray-400 leading-8">
                A future where geographical barriers disappear and people can
                communicate, collaborate, and connect naturally through
                holographic technology.
              </p>
            </div>

          </div>

          {/* FOOTER STATEMENT */}
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <p className="text-xl font-medium text-gray-300 md:text-2xl">
              Founded in India.{" "}
              <span className="text-green-400 font-semibold">
                Built for the world.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-green-400">
              Core Values
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              What Drives Us
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">Innovation</h3>
              <p className="mt-4 text-gray-400">
                Pushing boundaries of holographic communication technology.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">Reliability</h3>
              <p className="mt-4 text-gray-400">
                Enterprise-grade stable communication systems.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">Human Connection</h3>
              <p className="mt-4 text-gray-400">
                Technology that brings people closer, not further apart.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-12 text-center">

            <h2 className="text-4xl font-bold">
              Experience The Future Today
            </h2>

            <p className="mt-6 text-gray-400">
              Discover how Dgramtor can transform communication within your organization.
            </p>

            <a
              href="/request-demo"
              className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 font-semibold text-black hover:bg-green-400 transition"
            >
              Request Demo
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}