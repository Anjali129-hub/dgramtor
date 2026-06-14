export default function VideoSection() {
    return (
        <section className="relative overflow-hidden bg-black py-24">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e10_0%,transparent_70%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <span className="font-semibold uppercase tracking-widest text-green-400">
                        Holographic Experience
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                        Experience The Future
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-gray-400">
                        Witness how holographic communication transforms remote
                        interactions into immersive real-world experiences.
                    </p>
                </div>

                {/* Video Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-xl">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        className="relative z-10 w-full"
                    >
                        <source
                            src="/videos/hologram_video.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                {/* Bottom Text */}
                <div className="mt-8 text-center">
                    <p className="text-lg text-gray-400">
                        Bridging distances with{" "}
                        <span className="font-semibold text-green-400">
                            next-generation holographic technology.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}