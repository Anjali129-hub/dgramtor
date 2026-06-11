import { AlertCircle, Users, Globe } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Video Calls Feel Flat",
    description:
      "Traditional 2D video calls lack presence, eye contact, and natural body language — making remote collaboration feel disconnected.",
  },
  {
    icon: Users,
    title: "Engagement Drops",
    description:
      "Remote teams, students, and clients disengage quickly when meetings feel impersonal and lack the depth of in-person interaction.",
  },
  {
    icon: Globe,
    title: "Distance Is a Barrier",
    description:
      "Critical decisions, education, and healthcare are delayed or compromised because true presence isn't possible across distances.",
  },
];

export default function ProblemStatement() {
  return (
    <section className="relative bg-zinc-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ef444415_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-red-400">
            The Problem
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Remote Communication Is Broken
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Despite the rise of video conferencing, the world still lacks
            true presence — the feeling of actually being in the same room
            as the person you&apos;re talking to.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="rounded-3xl border border-red-500/10 bg-red-500/5 p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
                  <Icon className="h-7 w-7 text-red-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {problem.title}
                </h3>

                <p className="text-gray-400">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <p className="text-2xl font-semibold text-white md:text-3xl">
            The world needs more than video calls.{" "}
            <span className="text-cyan-400">
              It needs real presence.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}