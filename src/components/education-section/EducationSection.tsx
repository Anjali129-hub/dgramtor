import Image from "next/image";
import {
  GraduationCap,
  Users,
  Globe,
  MonitorPlay,
  BookOpen,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Interactive Learning",
    description:
      "Students experience immersive holographic lessons that make concepts tangible.",
  },
  {
    icon: Users,
    title: "Higher Engagement",
    description:
      "Improve classroom participation and collaborative discussion.",
  },
  {
    icon: Globe,
    title: "Global Classrooms",
    description:
      "Connect educators and students worldwide without barriers.",
  },
  {
    icon: MonitorPlay,
    title: "Live 3D Teaching",
    description:
      "Deliver realistic and impactful virtual lectures in real time.",
  },
  {
    icon: BookOpen,
    title: "Remote Learning",
    description:
      "Bring full classroom experiences to students anywhere.",
  },
  {
    icon: Brain,
    title: "Better Retention",
    description:
      "Visual learning improves understanding and long-term memory.",
  },
];

export default function EducationSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Education Industry
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Transforming Education Through Holographic Learning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Dgramtor enables educators to create immersive, engaging and
            highly interactive learning experiences through real-time
            holographic communication.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-green-500/10 blur-3xl" />

            <Image
              src="/images/education.jpeg"
              alt="Education Solution"
              width={900}
              height={700}
              className="relative z-10 w-full rounded-3xl border border-white/10 object-cover"
            />
          </div>

          {/* Features */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-green-500 hover:bg-white/10"
                >
                  <Icon className="mb-4 h-8 w-8 text-green-400" />

                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h3 className="text-5xl font-bold text-green-400">
              3D
            </h3>

            <p className="mt-3 text-gray-300">
              Holographic Learning
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h3 className="text-5xl font-bold text-green-400">
              Live
            </h3>

            <p className="mt-3 text-gray-300">
              Real-Time Classes
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h3 className="text-5xl font-bold text-green-400">
              Global
            </h3>

            <p className="mt-3 text-gray-300">
              Student Connectivity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}