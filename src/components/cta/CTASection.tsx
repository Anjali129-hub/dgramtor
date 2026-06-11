import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            The Future of Communication Is Here
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300">
            Experience holographic communication technology designed
            for enterprises, institutions, and next-generation
            collaboration.
          </p>

          <Link
            href="/request-demo"
            className="mt-8 inline-block rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black"
          >
            Book Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
}