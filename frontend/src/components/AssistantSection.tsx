import { useEffect, useState } from "react";
import Blob from "./Blob";

const AssistantSection = () => {
  const [listening, setListening] = useState(false);
  const [conversation, setConversation] = useState<
    { role: string; text: string }[]
  >([]);
  const [speaking, setSpeaking] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [speechRecognition, setSpeechRecognition] =
    useState<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.lang = "en-US";
      recog.continuous = false;
      recog.interimResults = false;
      recog.onstart = () => setListening(true);
      recog.onend = () => setListening(false);

      recog.onresult = async (event: SpeechRecognitionEvent) => {
        console.log("result received");
        const userText = event.results[0][0].transcript;
        addToConversation("user", userText);
        const aiReply = await getAIResponse([
          ...conversation,
          { role: "user", text: userText },
        ]);
        addToConversation("assistant", aiReply);
        speakText(aiReply);
      };

      setSpeechRecognition(recog);
    } else {
      alert("Speech Recognition not supported");
    }
  }, []);

  const addToConversation = (role: string, text: string) => {
    setConversation((pre) => [...pre,{ role, text }]);
  };


  const cleanResponseText = (text: string): string => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "$1") // bold -> remove **
      .replace(/\*(.*?)\*/g, "$1") // italic/bullets -> remove *
      .replace(/^- /gm, "") // dash bullets
      .replace(/^\* /gm, "") // asterisk bullets
      .trim();
  };

  // Update getAIResponse:
  const getAIResponse = async (
    conversationHistory: { role: string; text: string }[]
  ) => {
    setLoading(true);
    setError(null);

    try {
      const prompt = `
You're a helpful, concise assistant named EduMate.
Reply in **under 150 words**, using short paragraphs, emojis, or bullets where helpful.
Format responses for clarity and readability.

Conversation:
${conversationHistory
  .map(({ role, text }) => `${role === "user" ? "User" : "Assistant"}: ${text}`)
  .join("\n")}

Assistant:
`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const rawText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I didn't understand that.";

      return cleanResponseText(rawText);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setError("Error talking to Gemini. Please try again.");
      return "Something went wrong.";
    } finally {
      setLoading(false);
    }
  };


  const speakText = (text: string) => {
    setSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  const handleMicClick = () => {
    if (loading) return; // Don't allow new requests while waiting

    if (speechRecognition) {
      if (listening) {
        speechRecognition.stop();
      } else {
        speechRecognition.start();
        setConversation([]); // Clear conversation on new session
      }
    }
  };

  return (
    <div
      id="assistant"
      className="relative text-center items-center flex flex-col justify-center py-8 mb-6 bg-gray-100 min-h-screen"
    >
      <h1 className="text-3xl font-bold mb-2">Voice Assistant</h1>
      <h3 className="text-xl font-semibold mb-6">Ask Me Anything</h3>

      <div className="relative">
        <Blob active={listening} />
        

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          {!loading ? (
            <>
              {" "}
              <h1 className="text-xl md:text-3xl font-bold ">
                Hi, I'm <span className="text-white/90">EduMate</span>
              </h1>
              <p className="mt-2 text-gray-300">
                an AI{" "}
                <span className="bg-white text-black text-sm px-2 py-1 rounded ml-1">
                  Assistant
                </span>
              </p>
            </>
          ) : (
            <div className="mt-4 text-yellow-500 font-semibold">
              Thinking...
            </div>
          )}
        </div>
      </div>

      <button
        onClick={()=> {
          if (speaking) {
            stopSpeaking();
          } else {
            handleMicClick();
          }
        }}
        className={`mt-12 p-4 rounded-full text-white font-bold transition-all ${
          listening
            ? "bg-red-500 animate-pulse"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {listening ? "Listening..." : speaking ? "Stop Speaking"  : "🎤 Tap to Speak"}
      </button>

      <div className="mt-10 w-full max-w-lg px-4 text-left space-y-4">
        {error && (
          <div className="mt-4 text-red-500 font-semibold">{error}</div>
        )}
        {conversation.map((entry, idx) => (
          <div
            key={idx}
            className={`${entry.role === "user" ? "text-right" : "text-left"}`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                entry.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {entry.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssistantSection;
