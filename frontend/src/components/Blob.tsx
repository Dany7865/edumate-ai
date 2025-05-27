const Blob = ({ active }: {active: boolean}) => {
  return (
    <div
      className={`w-64 h-64 rounded-full mx-auto transition-all duration-500 ${
        active
          ? "animate-glow bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-pink-500/40"
          : "bg-gradient-to-r from-blue-500 to-purple-500"
      }`}
    ></div>
  );
};

export default Blob;

