import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  Globe,
  Shield,
  Wifi,
  Video,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "3D Holographic Display",
  },
  {
    icon: Video,
    title: "Live Communication",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
  },
  {
    icon: Wifi,
    title: "Anywhere Access",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
  },
  {
    icon: Cpu,
    title: "Smart Processing",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e15_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="font-semibold uppercase tracking-widest text-green-400">
                Our Product
              </span>

              <h1 className="mt-6 text-5xl font-bold md:text-7xl">
                Dgramtor Live 3D
              </h1>

              <p className="mt-8 text-lg text-gray-400">
                Experience immersive holographic communication that
                creates real presence and real connection across any distance.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/request-demo"
                  className="rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400"
                >
                  Request Demo
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-8 py-4 transition hover:border-green-500"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500/10 blur-3xl" />

              <Image
                src="/images/product.jpeg"
                alt="Dgramtor Product"
                width={900}
                height={900}
                className="relative z-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-green-400">
              Product Features
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Advanced Holographic Technology
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-green-500"
                >
                  <Icon className="mb-4 h-8 w-8 text-green-400" />

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-10">
            <h2 className="mb-10 text-center text-4xl font-bold">
              Product Highlights
            </h2>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-400">
                  3D
                </h3>
                <p className="mt-2 text-gray-400">
                  Holographic Presence
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-400">
                  Live
                </h3>
                <p className="mt-2 text-gray-400">
                  Communication
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-400">
                  Global
                </h3>
                <p className="mt-2 text-gray-400">
                  Connectivity
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-400">
                  Secure
                </h3>
                <p className="mt-2 text-gray-400">
                  Enterprise Ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-12 text-center">
            <h2 className="text-4xl font-bold">
              Ready To Experience Dgramtor?
            </h2>

            <p className="mt-6 text-gray-400">
              Schedule a live product demonstration and see holographic
              communication in action.
            </p>

            <Link
              href="/request-demo"
              className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}