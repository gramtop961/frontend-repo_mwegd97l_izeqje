import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Fingerprint } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(37,99,235,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Nav */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 rounded-md bg-gradient-to-br from-sky-400 via-blue-500 to-violet-500 shadow-lg shadow-blue-500/30 ring-1 ring-white/10" />
            <span className="text-sm font-semibold tracking-wide text-white/90">VanishAuth</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-white/70 hover:text-white">Features</a>
            <a href="#code" className="text-sm text-white/70 hover:text-white">Code</a>
            <a href="#security" className="text-sm text-white/70 hover:text-white">Security</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#docs" className="hidden rounded-md px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 backdrop-blur md:block hover:bg-white/5">Docs</a>
            <a
              href="mailto:founders@vanishauth.dev?subject=Request%20Access"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Request Access <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-16 pt-10 md:grid-cols-12 md:pb-24 md:pt-16">
          <div className="col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Fingerprint size={14} className="text-sky-300" />
              Biometric, passwordless, dev-first
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl">
              Auth that disappears.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Drop-in, passwordless authentication with native biometrics and passkeys. Go live with one line of code and
              bank-grade security.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:founders@vanishauth.dev?subject=Request%20Access"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/10 transition hover:brightness-110"
              >
                Get early access <ArrowRight size={16} />
              </a>
              <a href="#code" className="rounded-md px-5 py-3 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/5">
                See the one-liner
              </a>
            </div>

            {/* Trust badges */}
            <div id="security" className="mt-10 flex flex-wrap items-center gap-2 text-xs text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                <Shield size={14} className="text-emerald-300" /> SOC 2 & GDPR-ready
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                <Shield size={14} className="text-sky-300" /> FIDO2 / WebAuthn
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                <Shield size={14} className="text-violet-300" /> End-to-end encryption
              </span>
            </div>
          </div>

          <div className="col-span-5">
            {/* Spacer for 3D scene focus; content is primarily the Spline object */}
            <div className="h-72 w-full md:h-96" />
          </div>
        </div>
      </div>
    </section>
  );
}
