import {
  Shield,
  Globe,
  Wifi,
  MonitorPlay,
  Video,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live 3D Communication",
    description:
      "Experience real-time holographic communication with life-like presence and natural interaction.",
  },
  {
    icon: Globe,
    title: "Multi-Location Connectivity",
    description:
      "Connect multiple locations simultaneously without compromising quality or engagement.",
  },
  {
    icon: GraduationCap,
    title: "Immersive Learning",
    description:
      "Transform education through holographic classrooms and interactive learning experiences.",
  },
  {
    icon: Wifi,
    title: "Anywhere Access",
    description:
      "Collaborate seamlessly from anywhere in the world using existing infrastructure.",
  },
  {
    icon: MonitorPlay,
    title: "Premium Quality",
    description:
      "Crystal-clear visuals and professional-grade audio for enterprise communication.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Secure, reliable and scalable communication built for organizations of all sizes.",
  },
];

export default function WhyDgramtor() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Why Choose Dgramtor
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Built For The Future Of Communication
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Dgramtor combines holographic innovation, enterprise reliability,
            and global connectivity into one powerful communication platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 rounded-3xl border border-green-500/20 bg-green-500/5 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Real Presence. Real Connection.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            Dgramtor is redefining remote communication through immersive
            holographic technology, enabling people to collaborate, learn,
            teach and connect as if they were physically present.
          </p>
        </div>
      </div>
    </section>
  );
}