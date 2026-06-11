import {
  GraduationCap,
  Heart,
  Building2,
  Landmark,
  Clapperboard,
  Home,
  Monitor,
  Globe,
  Shield,
  Wifi,
  Video,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

/* INDUSTRIES */
const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Immersive classrooms, virtual campuses, and interactive holographic learning.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Remote consultations, medical training, and collaborative patient care.",
  },
  {
    icon: Building2,
    title: "Corporate",
    description:
      "Executive meetings, global team collaboration, and immersive presentations.",
  },
  {
    icon: Landmark,
    title: "Government",
    description:
      "Secure communication, public services, and diplomatic collaboration.",
  },
  {
    icon: Clapperboard,
    title: "Entertainment",
    description:
      "Virtual performances, live holographic events, and audience engagement.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Property showcases, virtual walkthroughs, and immersive client presentations.",
  },
];

/* FEATURES (your second section merged in) */
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
      "Connect teams worldwide through real-time holographic communication.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Secure, encrypted communication channels for enterprise-grade use.",
  },
  {
    icon: Wifi,
    title: "Wireless Integration",
    description:
      "Seamless deployment with modern network infrastructure.",
  },
  {
    icon: Video,
    title: "Real-Time Streaming",
    description:
      "Ultra-low latency communication for natural interaction.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Quick setup enabling immediate usage across organizations.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e15_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Industries
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Industries We Serve
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            Dgramtor transforms communication across multiple sectors through
            immersive holographic technology and real-time presence.
          </p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                    <Icon className="h-7 w-7 text-green-400" />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {industry.title}
                  </h3>

                  <p className="mb-6 leading-7 text-gray-400">
                    {industry.description}
                  </p>

                  <div className="flex items-center gap-2 text-green-400">
                    Learn More <ArrowRight size={18} />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FEATURES SECTION (INTEGRATED) */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-green-400">
              Core Features
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Built For Modern Communication
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-gray-400">
              Dgramtor combines holographic innovation, security, connectivity,
              and real-time communication into one platform.
            </p>
          </div>

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

        </div>
      </section>

      {/* STATS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8 text-center">
              <h3 className="text-5xl font-bold text-green-400">6+</h3>
              <p className="mt-2 text-gray-400">Industries</p>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8 text-center">
              <h3 className="text-5xl font-bold text-green-400">24/7</h3>
              <p className="mt-2 text-gray-400">Connectivity</p>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8 text-center">
              <h3 className="text-5xl font-bold text-green-400">3D</h3>
              <p className="mt-2 text-gray-400">Holographic Presence</p>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8 text-center">
              <h3 className="text-5xl font-bold text-green-400">Global</h3>
              <p className="mt-2 text-gray-400">Reach</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-12 text-center">

            <h2 className="text-4xl font-bold">
              Ready To Transform Your Industry?
            </h2>

            <p className="mt-6 text-gray-400">
              See how Dgramtor can create immersive communication experiences.
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