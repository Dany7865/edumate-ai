import MobileNav from "./MobileNav";


export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">EduMate.AI</h1>
        <nav className="space-x-6  font-normal min-sm:block hidden">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#assistant" className="hover:text-blue-600">Assistant</a>
          <a href="#footer" className="hover:text-blue-600">Contact</a>
        </nav>
        <MobileNav/>
      </div>
    </header>
  );
}