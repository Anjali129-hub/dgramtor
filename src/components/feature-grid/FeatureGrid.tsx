import {
  Monitor,
  Globe,
  Shield,
  Wifi,
  Video,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "HD Holographic Display",
    description:
      "Crystal-clear holographic visualization with immersive depth and realistic presence.",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    description:
      "Connect teams, clients and partners worldwide through real-time holographic communication.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Protected communication channels designed for enterprise and government-grade environments.",
  },
  {
    icon: Wifi,
    title: "Wireless Integration",
    description:
      "Deploy seamlessly using modern network infrastructure and existing systems.",
  },
  {
    icon: Video,
    title: "Real-Time Streaming",
    description:
      "Ultra-low latency communication for natural conversations and collaboration.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Quick installation and setup allowing organizations to start communicating immediately.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Core Features
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Powerful Technology Built For Modern Communication
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Dgramtor combines holographic innovation, seamless connectivity,
            enterprise security and immersive communication into one platform.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                  <Icon className="h-7 w-7 text-green-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl border border-green-500/20 bg-green-500/5 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Built For Scale. Designed For Presence.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            Whether you're teaching a classroom, leading a board meeting,
            consulting a patient, or presenting to a global audience,
            Dgramtor delivers a truly immersive communication experience.
          </p>
        </div>
      </div>
    </section>
  );
}