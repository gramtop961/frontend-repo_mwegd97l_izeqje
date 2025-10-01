import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeSnippet from './components/CodeSnippet';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      <Hero />
      <Features />
      <CodeSnippet />
      <Footer />
    </div>
  );
}
