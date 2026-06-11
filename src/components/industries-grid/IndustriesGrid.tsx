import {
  GraduationCap,
  Heart,
  Building2,
  Landmark,
  Clapperboard,
  Home,
} from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Immersive holographic classrooms and remote learning experiences.",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "Remote consultations and surgical training with 3D visualization.",
  },
  {
    icon: Building2,
    name: "Corporate",
    description:
      "Executive meetings, global team collaboration, and presentations.",
  },
  {
    icon: Landmark,
    name: "Government",
    description:
      "Secure diplomatic communications and public service delivery.",
  },
  {
    icon: Clapperboard,
    name: "Entertainment",
    description:
      "Live performances, virtual events, and interactive experiences.",
  },
  {
    icon: Home,
    name: "Real Estate",
    description:
      "Immersive property tours and client walkthroughs from anywhere.",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Use Cases
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Dgramtor transforms communication across industries through
            immersive holographic presence and real-time collaboration.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                  <Icon className="h-8 w-8 text-green-400" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {industry.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white">
            One Platform. Multiple Industries.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            From classrooms to boardrooms, hospitals to government offices,
            Dgramtor brings people together through immersive holographic
            communication.
          </p>
        </div>
      </div>
    </section>
  );
}