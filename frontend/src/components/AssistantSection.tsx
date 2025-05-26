export default function AssistantSection() {
  return (
    <section id="assistant" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">Try EduMate.AI Assistant</h3>
        <p className="text-lg mb-6">Use your voice or text to get personalized guidance.</p>
        <div className="max-w-2xl mx-auto">
          <textarea
          
          
            placeholder="Ask something like: What should I learn for a career in AI?"
            className="w-full p-4 rounded-lg border border-gray-300 mb-4 resize-none" 
            rows={4}
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}