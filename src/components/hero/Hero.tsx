"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-40 pb-24">
      {/* Green Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e_0%,transparent_60%)] opacity-20" />

      {/* Extra Glow Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              LIVE 3D HOLOGRAM VIDEO CALLING DEVICE
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              DGRAMTOR
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-green-400 md:text-3xl">
              Real Presence. Real Connection.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Transform communication through immersive holographic
              technology. Experience life-like interactions, real-time
              collaboration, natural eye contact, and seamless engagement
              from anywhere in the world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/request-demo"
                className="rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
              >
                Request Demo
              </Link>

              <Link
                href="/product"
                className="rounded-full border border-white/20 px-8 py-4 text-white transition-all duration-300 hover:border-green-500 hover:text-green-400"
              >
                Explore Product
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  3D
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Holographic Display
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  Live
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Communication
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  Global
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Connectivity
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Behind Device */}
            <div className="absolute inset-0 rounded-full bg-green-500/20 blur-3xl" />

            <Image
              src="/images/hologram-device.jpeg"
              alt="Dgramtor Hologram Device"
              width={900}
              height={900}
              priority
              className="relative z-10 mx-auto drop-shadow-[0_0_50px_rgba(34,197,94,0.35)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}