import {
  GraduationCap,
  Heart,
  Building2,
  Landmark,
  Clapperboard,
  Home,
} from "lucide-react";

import WhyDgramtor from "@/components/why-dgramtor/WhyDgramtor";

const solutions = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Transform classrooms with immersive holographic teaching and global learning experiences.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Enable remote consultations, medical training, and specialist collaboration.",
  },
  {
    icon: Building2,
    title: "Corporate",
    description:
      "Enhance board meetings, executive presentations, and team collaboration.",
  },
  {
    icon: Landmark,
    title: "Government",
    description:
      "Secure communication for administration, diplomacy, and public services.",
  },
  {
    icon: Clapperboard,
    title: "Entertainment",
    description:
      "Create immersive live performances, virtual events, and audience engagement.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Deliver virtual property walkthroughs and holographic client presentations.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e15_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Solutions
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Industry Solutions
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            Dgramtor empowers organizations across industries with immersive
            holographic communication and collaboration.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                    <Icon className="h-7 w-7 text-green-400" />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {solution.title}
                  </h3>

                  <p className="leading-7 text-gray-400">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Dgramtor */}
      <WhyDgramtor />

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-12 text-center">
            <h2 className="text-4xl font-bold text-white">
              One Platform. Unlimited Possibilities.
            </h2>

            <p className="mt-6 text-gray-400">
              Discover how Dgramtor can transform communication within your
              industry.
            </p>

            <a
              href="/request-demo"
              className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}