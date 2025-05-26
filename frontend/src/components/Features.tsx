const features = [
  {
    title: 'Voice Assistant',
    description: 'Ask questions, get career guidance, and discover learning paths using AI.',
  },
  {
    title: 'Student Portal',
    description: 'Access semester-wise notes, PYQs, and curated video lectures.',
  },
  {
    title: 'Resume & PDF Tools',
    description: 'Build resumes and convert/merge PDFs directly in the browser.',
  },
  {
    title: 'Community Content',
    description: 'Upload and browse notes contributed by fellow students with admin review.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}