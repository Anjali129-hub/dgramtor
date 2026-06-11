"use client";

import { useState } from "react";

export default function RequestDemoPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    teamSize: "",
    date: "",
    time: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Demo request submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          teamSize: "",
          date: "",
          time: "",
          requirements: "",
        });
      } else {
        alert("Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e20_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="font-semibold uppercase tracking-widest text-green-400">
            Request Demo
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Experience Dgramtor Live
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
            Schedule a personalized holographic communication demo and
            discover how Dgramtor can transform your organization.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-green-500/20 bg-white/5 p-10 backdrop-blur-xl">
            <form
              onSubmit={handleSubmit}
              className="grid gap-6 md:grid-cols-2"
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                required
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                required
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                required
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              />

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text"
                placeholder="Company Name"
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              />

              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              >
                <option value="">Choose Industry</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Corporate</option>
                <option>Government</option>
                <option>Entertainment</option>
                <option>Real Estate</option>
              </select>

              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              >
                <option value="">Team Size</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-1000</option>
                <option>1000+</option>
              </select>

              <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              />

              <input
                name="time"
                value={formData.time}
                onChange={handleChange}
                type="time"
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              />

              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your requirements..."
                className="md:col-span-2 rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none focus:border-green-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Request Demo"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
              <h3 className="text-4xl font-bold text-green-400">Live</h3>
              <p className="mt-3 text-gray-300">
                Product Demonstration
              </p>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
              <h3 className="text-4xl font-bold text-green-400">Custom</h3>
              <p className="mt-3 text-gray-300">
                Industry Solutions
              </p>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
              <h3 className="text-4xl font-bold text-green-400">Expert</h3>
              <p className="mt-3 text-gray-300">
                Consultation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}