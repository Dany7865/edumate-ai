export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Your Academic Buddy & Career Guide</h2>
        <p className="text-lg mb-6">Voice-powered assistant + academic portal to simplify student life</p>
        <a
          href="#assistant"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
        >
          Try the Assistant
        </a>
      </div>
    </section>
  );
}