import React from 'react';

const Snippet = ({ lines }) => (
  <pre className="overflow-x-auto rounded-lg bg-[#0B0F17] p-4 text-[13px] leading-relaxed text-white ring-1 ring-white/10">
    <code>
      {lines.map((l, i) => (
        <div key={i} className="whitespace-pre">{l}</div>
      ))}
    </code>
  </pre>
);

export default function CodeSnippet() {
  const oneLiner = [
    "import { VanishAuth } from '@vanish/auth';",
    '',
    '<VanishAuth biometric required onSuccess={(u)=>console.log(u)} />',
  ];

  const reactExample = [
    "import { useEffect } from 'react';",
    "import { init, signIn } from '@vanish/auth/client';",
    '',
    'useEffect(() => {',
    "  init({ projectId: import.meta.env.VITE_VANISH_ID });",
    '}, []);',
    '',
    'await signIn({ prefer: "biometric" });',
  ];

  const nodeExample = [
    "import { verifyAssertion } from '@vanish/auth/server';",
    '',
    'export async function POST(req) {',
    '  const body = await req.json();',
    '  const session = await verifyAssertion(body);',
    '  return Response.json({ user: session.user });',
    '}',
  ];

  return (
    <section id="code" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">One line to passwordless</h2>
            <p className="mt-1 text-sm text-white/70">Copy, paste, ship. It just works.</p>
          </div>
          <a
            href="#docs"
            className="rounded-md bg-white/10 px-3 py-2 text-xs text-white ring-1 ring-white/15 hover:bg-white/15"
          >
            View Docs
          </a>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex gap-2">
            <button className="rounded-md bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/15">One-liner</button>
            <button className="rounded-md px-3 py-1 text-xs text-white/70 hover:bg-white/10">React</button>
            <button className="rounded-md px-3 py-1 text-xs text-white/70 hover:bg-white/10">Server</button>
          </div>
          <Snippet lines={oneLiner} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Snippet lines={reactExample} />
          <Snippet lines={nodeExample} />
        </div>
      </div>
    </section>
  );
}
