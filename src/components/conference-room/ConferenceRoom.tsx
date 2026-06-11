import Image from "next/image";
import {
  Building2,
  Users,
  Video,
  Globe2,
  Wifi,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Smart Conference Rooms",
    description:
      "Transform traditional meeting spaces into immersive collaboration hubs.",
  },
  {
    icon: Users,
    title: "Multi-Participant Presence",
    description:
      "Interact naturally with multiple participants across locations.",
  },
  {
    icon: Video,
    title: "Real-Time Holographic Meetings",
    description:
      "Life-like communication with natural engagement and eye contact.",
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    description:
      "Connect teams, partners, and clients anywhere in the world.",
  },
  {
    icon: Wifi,
    title: "Wireless Integration",
    description:
      "Works seamlessly with existing network infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Enterprise-grade privacy and communication security.",
  },
];

export default function ConferenceRoom() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Conference Room Solution
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Bring Holographic Communication Into Every Meeting
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Enable immersive board meetings, seminars, webinars,
            executive presentations and global collaboration through
            Dgramtor&apos;s holographic communication technology.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-green-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/conference.jpeg"
                alt="Conference Room"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-green-500 hover:bg-white/10"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                      <Icon className="h-6 w-6 text-green-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-4">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              24/7
            </h3>
            <p className="mt-2 text-gray-300">
              Availability
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              Live
            </h3>
            <p className="mt-2 text-gray-300">
              Communication
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              Global
            </h3>
            <p className="mt-2 text-gray-300">
              Connectivity
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              Secure
            </h3>
            <p className="mt-2 text-gray-300">
              Enterprise Ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}