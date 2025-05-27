import {
  Twitter,
  Linkedin,
  Github,
  Mail
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3 items-center text-sm text-gray-500">
        
        {/* Left section */}
        <div className="text-center md:text-left">
          &copy; 2025 <span className="font-semibold text-gray-700">EduMate.AI</span><br />
          Crafted with ❤️ for <span className="font-medium text-gray-700">HackVortex</span>
        </div>

        {/* Middle section - Links */}
        <div className="text-center">
          <a href="/privacy-policy" className="hover:underline text-gray-600">
            Privacy Policy
          </a>
        </div>

        {/* Right section - Social + Contact */}
        <div className="flex justify-center md:justify-end items-center space-x-4">
          <a href="mailto:contact@edumate.ai" className="hover:text-gray-700" title="Email us">
            <Mail size={18} />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700" title="Twitter">
            <Twitter size={18} />
          </a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700" title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700" title="GitHub">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
