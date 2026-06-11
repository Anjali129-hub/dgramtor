import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Mission & Vision
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            We are building the future of communication through immersive
            holographic technology that makes every interaction feel real.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-10 backdrop-blur-xl transition-all duration-300 hover:border-green-500">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
              <Target className="h-8 w-8 text-green-400" />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-white">
              Our Mission
            </h3>

            <p className="text-lg leading-8 text-gray-400">
              To eliminate the distance between people by delivering
              holographic communication technology that creates genuine
              human presence — making every remote interaction feel as
              natural and impactful as being in the same room.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-10 backdrop-blur-xl transition-all duration-300 hover:border-green-500">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
              <Eye className="h-8 w-8 text-green-400" />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-white">
              Our Vision
            </h3>

            <p className="text-lg leading-8 text-gray-400">
              A world where geography is no longer a limitation — where
              doctors treat patients, teachers inspire students, and
              executives lead teams through immersive holographic presence,
              from anywhere on the planet.
            </p>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <p className="text-xl font-medium text-gray-300 md:text-2xl">
            Founded in India.{" "}
            <span className="font-semibold text-green-400">
              Built for the world.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}