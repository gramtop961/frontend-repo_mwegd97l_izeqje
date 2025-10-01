import React from 'react';

const logos = [
  { name: 'FIDO2', text: 'FIDO2' },
  { name: 'WebAuthn', text: 'WebAuthn' },
  { name: 'SOC2', text: 'SOC 2' },
  { name: 'GDPR', text: 'GDPR' },
];

export default function TrustBar() {
  return (
    <section className="w-full border-t border-white/10 bg-black/95 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 opacity-80">
        {logos.map((l) => (
          <div
            key={l.name}
            className="rounded-md bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 ring-1 ring-white/10"
          >
            {l.text}
          </div>
        ))}
      </div>
    </section>
  );
}
