import React from 'react';
import { Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-400 via-blue-500 to-violet-500 ring-1 ring-white/10" />
          <div>
            <p className="text-sm font-semibold">VanishAuth</p>
            <p className="text-xs text-white/60">Auth that disappears.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="mailto:founders@vanishauth.dev" aria-label="Email" className="hover:text-white"><Mail size={18} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
          <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
        </div>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} VanishAuth, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
