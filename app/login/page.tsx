"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
export default function AuthPage() {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/book/alice/chapter-1');
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <>
      {/*  TopNavBar Shell Visibility: Hidden for focused journey, but following provided JSON instructions  */}
      <nav className="fixed top-0 w-full z-50 bg-[#131121]/60 backdrop-blur-2xl flex justify-between items-center px-8 h-20 shadow-[0px_24px_48px_rgba(108,63,255,0.08)]">
        <div className="text-xl font-bold tracking-tighter text-[#e5dff6]">
          Book AI Platform
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="font-plus-jakarta text-sm font-medium tracking-tight text-[#e5dff6]/60 hover:text-[#00daf3] transition-colors duration-300"
            href="#"
          >
            Features
          </a>
          <a
            className="font-plus-jakarta text-sm font-medium tracking-tight text-[#e5dff6]/60 hover:text-[#00daf3] transition-colors duration-300"
            href="#"
          >
            Library
          </a>
          <a
            className="font-plus-jakarta text-sm font-medium tracking-tight text-[#e5dff6]/60 hover:text-[#00daf3] transition-colors duration-300"
            href="#"
          >
            Pricing
          </a>
          <button className="font-plus-jakarta text-sm font-medium tracking-tight text-[#c4c0ff] hover:text-[#00daf3] transition-colors duration-300 scale-95 active:scale-90 transition-transform px-6 py-2 rounded-full surface-container-highest border border-outline-variant/15">
            Help
          </button>
        </div>
      </nav>
      {/*  Main Canvas  */}
      <main className="flex-grow pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto min-h-screen md:grid md:grid-cols-2 items-center gap-12 px-6 py-12">
          {/*  Left Section: Ethereal Illustration  */}
          <div className="hidden md:flex flex-col justify-center items-start relative space-y-8">
            <div className="absolute -top-20 -left-20 w-96 h-96 data-aura rounded-full blur-[100px] opacity-40"></div>
            <div className="relative z-10 w-full aspect-square flex items-center justify-center">
              <div className="relative w-4/5 h-4/5">
                <img
                  alt="Ethereal glowing book"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(196,192,255,0.3)]"
                  data-alt="A magical floating book with translucent pages glowing in soft violet light against a deep cosmic background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVoiRmkmwdXlPcrLit28zxt2Nc5eMEb4Q9MZ6gCPCoaYzPKku_-K5sLTDYmjRsFqNAQ7ejUDx8LMbZcupAGS9FVbJXNiH89YVGI5Es9vERUwkVZpOe3-40tNjcyKaGp_EN23pzLRNT_OmfPCPYtAz3VZPyiW1jP4sv_9xy9wWoHpYMKdJGqcRyJkA2r2hINq1bAuIoKH_2GqO7YG-RDGs4ZK61ivytSvSD8ei5wzQ_mX1wZ-Lue5fNxnG-Z2__YbRiqYpbzocML-gZ"
                />
                {/*  AI Core Pulse  */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-tertiary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-tertiary rounded-full border-4 border-white/20 shadow-[0_0_50px_#00daf3]"></div>
              </div>
            </div>
            <div className="z-10">
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
                Unlock the Infinite <br />
                <span className="text-tertiary">Library of Intelligence.</span>
              </h1>
              <p className="text-on-surface-variant max-w-md text-lg font-medium leading-relaxed">
                Step into the Ethereal Laboratory where artificial intelligence
                synthesizes centuries of knowledge into a focused learning
                experience.
              </p>
            </div>
          </div>
          {/*  Right Section: Auth Form  */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md glass-card rounded-xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/*  Subtle decorative glow  */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-on-surface mb-2">
                  Welcome Back
                </h2>
                <p className="text-on-surface-variant text-sm tracking-wide">
                  Enter your credentials to access your laboratory.
                </p>
              </div>
              {/*  Google Sign-In  */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-surface-container-highest/40 hover:bg-surface-container-highest/60 border border-outline-variant/15 py-3.5 px-6 rounded-full transition-all duration-300 group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-1.08.75-2.33 1.19-3.71 1.19-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.87 14.26c-.22-.66-.35-1.36-.35-2.08s.13-1.42.35-2.08V7.26H2.18C1.43 8.76 1 10.45 1 12s.43 3.24 1.18 4.74l3.69-2.84z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.26l3.69 2.84c.86-2.59 3.28-4.51 6.13-4.51z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-on-surface text-sm font-semibold tracking-tight">
                  Continue with Google
                </span>
              </button>
              <div className="relative my-8 flex items-center">
                <div className="flex-grow border-t border-outline-variant/15"></div>
                <span className="px-4 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50 font-bold">
                  or use email
                </span>
                <div className="flex-grow border-t border-outline-variant/15"></div>
              </div>
              {/*  Form  */}
              <form className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-4">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-full px-6 py-3.5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-tertiary transition-all outline-none"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-4">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Password
                    </label>
                    <a
                      className="text-[10px] uppercase tracking-widest text-tertiary font-bold hover:underline"
                      href="#"
                    >
                      Forgot?
                    </a>
                  </div>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-full px-6 py-3.5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-tertiary transition-all outline-none"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <button
                  className="w-full py-4 gradient-button rounded-full text-on-primary-fixed font-extrabold text-sm tracking-widest uppercase shadow-[0_8px_20px_rgba(135,129,255,0.4)] hover:shadow-[0_12px_24px_rgba(0,218,243,0.3)] hover:-translate-y-0.5 transition-all active:scale-95"
                  type="submit"
                >
                  Sign In to Platform
                </button>
              </form>
              <p className="mt-8 text-center text-sm text-on-surface-variant">
                New to the laboratory?
                <a
                  className="text-tertiary font-bold hover:underline ml-1"
                  href="#"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      {/*  Footer Shell  */}
      <footer className="w-full py-12 bg-[#131121] mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a
              className="font-plus-jakarta text-[10px] uppercase tracking-[0.05em] text-[#e5dff6]/40 hover:text-[#c4c0ff] transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-plus-jakarta text-[10px] uppercase tracking-[0.05em] text-[#e5dff6]/40 hover:text-[#c4c0ff] transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-plus-jakarta text-[10px] uppercase tracking-[0.05em] text-[#e5dff6]/40 hover:text-[#c4c0ff] transition-colors"
              href="#"
            >
              Cookie Settings
            </a>
          </div>
          <p className="font-plus-jakarta text-[10px] uppercase tracking-[0.05em] text-[#8781ff]">
            © 2024 Book AI Platform. The Ethereal Laboratory.
          </p>
        </div>
      </footer>
    </>
  );
}
