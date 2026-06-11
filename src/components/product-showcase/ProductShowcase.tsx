import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Globe,
  Shield,
  Video,
  Wifi,
 Sparkles,
} from "lucide-react";

const specs = [
  {
    icon: Sparkles,
    title: "3D Holographic Projection",
  },
  {
    icon: Video,
    title: "Live Video Communication",
  },
  {
    icon: Globe,
    title: "Multi-Location Connectivity",
  },
  {
    icon: Wifi,
    title: "Anywhere Connectivity",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
  },
  {
    icon: Cpu,
    title: "Smart Processing Engine",
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e15_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Our Product
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            Dgramtor Live 3D
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            A next-generation holographic communication device designed
            to create real presence and real connection across any distance.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-green-500/20 blur-3xl" />

            <Image
              src="/images/product.jpeg"
              alt="Dgramtor Device"
              width={1000}
              height={1000}
              className="relative z-10 mx-auto drop-shadow-[0_0_40px_rgba(34,197,94,0.25)]"
            />
          </div>

          {/* Product Details */}
          <div>
            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              LIVE 3D HOLOGRAM VIDEO CALLING DEVICE
            </span>

            <h3 className="mt-6 text-4xl font-bold text-white">
              Real Presence. Real Connection.
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Designed for education, healthcare, government,
              enterprises and conference room collaboration.
              Deliver immersive communication experiences through
              advanced holographic technology and real-time
              holographic interaction.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {specs.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-green-500 hover:bg-white/10"
                  >
                    <Icon className="mb-3 h-6 w-6 text-green-400" />

                    <p className="font-medium text-white">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/request-demo"
                className="inline-flex items-center rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
              >
                Request Product Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}