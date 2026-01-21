import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg mb-2">Abhinav | Teach For India Fellow</p>
            <p className="text-sm text-slate-400">
              © 2026 All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/abhinav-thakur-8597ab393/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:abhinav.thakur2024@teachforindia.org" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}