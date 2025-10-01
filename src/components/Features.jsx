import React from 'react';
import { Fingerprint, Rocket, Code2, Lock } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Biometric Native',
    desc: 'Face ID, Touch ID, Windows Hello and Android Biometrics with graceful fallbacks.',
  },
  {
    icon: Rocket,
    title: 'One-line Install',
    desc: 'Add passwordless auth in minutes with a single import and drop-in component.',
  },
  {
    icon: Code2,
    title: 'Dev-First SDKs',
    desc: 'Type-safe client and server SDKs for React, Next.js, Node, and edge runtimes.',
  },
  {
    icon: Lock,
    title: 'Compliance-ready',
    desc: 'SOC 2, GDPR, and FIDO2 standards aligned with encryption by default.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400/20 to-violet-500/20 text-sky-300 ring-1 ring-white/10">
              <f.icon size={18} />
            </div>
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
