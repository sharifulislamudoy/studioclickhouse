export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl font-semibold mb-4">Welcome to the Future</h1>
        <p className="text-xl max-w-xl">
          Your video background hero section is alive.
        </p>
      </div>
    </section>
  );
}
