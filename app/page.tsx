"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function LandingPage() {
  return (
    <>
      {/*  TopNavBar  */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/20"
           style={{ backgroundColor: "color-mix(in srgb, var(--color-surface-container-low) 85%, transparent)" }}>
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary font-['Plus_Jakarta_Sans']">
            Book AI
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-semibold border-b-2 border-primary pb-1 font-['Plus_Jakarta_Sans'] tracking-tight" href="#">
              Platform
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="#">
              Case Studies
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="#">
              Solutions
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-['Plus_Jakarta_Sans'] tracking-tight" href="#">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login" className="hidden sm:block text-on-surface-variant hover:text-on-surface transition-colors font-medium text-sm">
              Log In
            </Link>
            <Link href="/login" className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-md hover:shadow-lg">
              Try the Demo
            </Link>
          </div>
        </div>
      </nav>
      <main className="relative overflow-hidden pt-24">
        {/*  Background Aura  */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] data-aura pointer-events-none opacity-40"></div>
        {/*  Hero Section  */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 text-tertiary text-xs font-bold tracking-widest uppercase mb-6">
                The Future of Reading
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
                Your book, now with <span className="gradient-text">AI</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
                Scan QR <span className="text-tertiary">→</span> Login{" "}
                <span className="text-tertiary">→</span> Ask doubts. Transform
                static text into an interactive dialogue with intelligent
                chapter-aware insights.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                <Link href="/login" className="group relative px-10 py-5 bg-gradient-to-br from-primary to-primary-container rounded-full text-on-primary-fixed font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(196,192,255,0.3)]">
                  Try the Demo
                  <div className="absolute inset-0 rounded-full animate-pulse bg-white/20 group-hover:opacity-0 transition-opacity"></div>
                </Link>
                <div className="flex items-center gap-3 text-on-surface-variant font-medium">
                  <span
                    className="material-symbols-outlined text-tertiary"
                    data-icon="play_circle"
                    data-weight="fill"
                  >
                    play_circle
                  </span>
                  Watch how it works
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-2xl">
              <div className="relative z-10 p-4 md:p-8 bg-surface-container-high/40 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                <img
                  alt="3D Isometric AI Illustration"
                  className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-700"
                  data-alt="Futuristic 3D isometric illustration of a floating digital book emitting glowing blue particles and neural network nodes against a dark background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPEzZ-gZCPUrKEDXHpFi4U3RdQZQI0x0ypuZBfqp4wFm4B4Qo0GCYaoYCIPhcyY7n_cPYpfHg38UgsfKAPCwVwHNmR53Ae1FrcOciD0JX4uNDnt5KbK9wSemte5vXZOL1GunV9pmaqXLFQ4cHmvzzmV-8QTuOA90H1hAwy5hlKoK_7W8ngR2wXbtvabRnhRaaABNkJKJBdhuHR6CuzGYDgEJ7jH5ejnIq7p5xcu45EX3v3YYt0pdqM4eA5aXWs3vb0kruEuOH0-d7D"
                />
              </div>
              {/*  Decorative elements  */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-tertiary/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </section>
        {/*  Features Grid  */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Reading, re-imagined.
              </h2>
              <p className="text-on-surface-variant text-lg">
                Harness the power of Large Language Models specifically tuned
                for your physical and digital library.
              </p>
            </div>
            <div className="text-tertiary font-bold tracking-widest text-sm uppercase">
              Core Features
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*  Card 1  */}
            <div className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:bg-tertiary/20 transition-colors">
                <span
                  className="material-symbols-outlined text-tertiary text-3xl"
                  data-icon="bolt"
                >
                  bolt
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Answers</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Stop flipping pages. Ask anything about the book&apos;s content
                and get cited, immediate responses.
              </p>
            </div>
            {/*  Card 2  */}
            <div className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="book_5"
                >
                  book_5
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Chapter Context</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Our AI understands where you are in the story. No spoilers, just
                contextual awareness.
              </p>
            </div>
            {/*  Card 3  */}
            <div className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-on-secondary-container/10 flex items-center justify-center mb-6 group-hover:bg-on-secondary-container/20 transition-colors">
                <span
                  className="material-symbols-outlined text-secondary-fixed text-3xl"
                  data-icon="edit_note"
                >
                  edit_note
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">PDF Notes</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Automatically generate concise chapter summaries and export them
                directly to your PDF reader.
              </p>
            </div>
          </div>
        </section>
        {/*  QR Interaction Section  */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 relative">
          <div className="absolute inset-0 bg-surface-container-low rounded-[3rem] -z-10"></div>
          <div className="flex flex-col lg:flex-row items-center gap-16 p-8 md:p-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Seamless physical integration.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center text-tertiary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Scan the QR</h4>
                    <p className="text-on-surface-variant">
                      Locate the Book AI sticker on the inside cover and scan it
                      with any smartphone camera.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center text-tertiary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Secure Login</h4>
                    <p className="text-on-surface-variant">
                      Instant authentication through your preferred academic or
                      social provider.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center text-tertiary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Engage with Text</h4>
                    <p className="text-on-surface-variant">
                      The AI companion opens ready to answer complex thematic
                      queries or clarify difficult passages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative flex justify-center">
              <div className="glass-card p-10 rounded-[3rem] relative z-10 shadow-2xl">
                <div className="bg-white p-4 rounded-2xl mb-6 inline-block">
                  <img
                    alt="QR Code Interface"
                    className="w-48 h-48 rounded-lg"
                    data-alt="A clean, minimalist QR code displayed on a high-end white card with subtle shadows and rounded corners"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlA1YFt5KiSQY4gifo68_q18jEVDEnciFbKAm5OaGhLrvuVT23mACUmftczyzO0P_BB7UpUJ8X3uoQK8kwisC2rOzBrv9Njm4L-Y1Jxw43Sx6dOJ8BlCA49Qt1cajOHNEd3bWQf_OKIeNFU-cE9_KSCzKLzJOSeUP38s-7Uygg6fg9rcUhN_XuQiN_WKP-d1HpgwNWPoG7ik6IyIRrv-U9mV56nLnrvdI5g41UDRAztplZXTdXnYWDJC9cwHs1-OXUKieL8yyb-MQK"
                  />
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-32 bg-tertiary/20 rounded-full"></div>
                  <div className="h-2 w-48 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-40 bg-white/10 rounded-full"></div>
                </div>
                {/*  Decorative glow  */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-tertiary/30 blur-[80px] rounded-full"></div>
              </div>
              {/*  Floating elements  */}
              <div className="absolute top-1/2 left-0 -translate-x-12 -translate-y-1/2 glass-card p-4 rounded-2xl rotate-[-12deg] shadow-xl">
                <span
                  className="material-symbols-outlined text-tertiary"
                  data-icon="verified"
                  data-weight="fill"
                >
                  verified
                </span>
                <span className="text-sm font-bold ml-2">
                  Book Authenticated
                </span>
              </div>
            </div>
          </div>
        </section>
        {/*  CTA Section  */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-32 text-center">
          <div className="glass-card bg-gradient-to-tr from-surface-container-high/80 to-indigo-900/20 p-12 md:p-24 rounded-[3rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              Ready to transcend the <br />
              traditional reading experience?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold text-lg rounded-full shadow-[0_20px_40px_rgba(135,129,255,0.2)] hover:scale-105 active:scale-95 transition-all">
                Get Started Now
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-surface-container-highest/60 backdrop-blur-xl border border-white/10 font-bold text-lg rounded-full hover:bg-surface-container-highest transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      {/*  Footer  */}
      <footer className="bg-slate-950 w-full py-12 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6 max-w-7xl mx-auto">
          <div className="col-span-2">
            <div className="text-xl font-bold text-indigo-300 mb-4 font-['Plus_Jakarta_Sans']">
              Book AI Platform
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Transforming how students and professionals interact with the
              written word through cutting-edge neural architectures.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-xs uppercase tracking-widest mb-2">
              Product
            </span>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              Features
            </a>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              API Docs
            </a>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              Status
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-xs uppercase tracking-widest mb-2">
              Company
            </span>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              Press
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-xs uppercase tracking-widest mb-2">
              Legal
            </span>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-xs uppercase tracking-widest mb-2">
              Support
            </span>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              Help Center
            </a>
            <a
              className="text-slate-500 hover:text-indigo-300 transition-colors text-sm hover:translate-x-1 transition-transform"
              href="#"
            >
              Community
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5">
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-slate-400">
            © 2024 Book AI Platform. Empowering the future of literacy.
          </p>
        </div>
      </footer>
    </>
  );
}
