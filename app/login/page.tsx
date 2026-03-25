"use client";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AuthPage() {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/book/alice/chapter-1");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <>
      {/* Navbar — theme-aware, with toggle on desktop + mobile */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/20"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-surface-container-low) 90%, transparent)" }}
      >
        <div className="flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary">
            Book AI Platform
          </Link>
          <div className="flex items-center gap-4">
            {/* Nav links — hidden on mobile */}
            <div className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors" href="#">Features</a>
              <a className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors" href="#">Pricing</a>
            </div>
            {/* Toggle always visible */}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Canvas */}
      <main className="flex-grow pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] md:grid md:grid-cols-2 items-center gap-12 px-6 py-12">
          {/* Left — illustration (desktop only) */}
          <div className="hidden md:flex flex-col justify-center items-start relative space-y-8">
            <div className="w-full aspect-square flex items-center justify-center">
              <div className="relative w-4/5 h-4/5">
                <img
                  alt="Ethereal glowing book"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(91,82,217,0.4)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVoiRmkmwdXlPcrLit28zxt2Nc5eMEb4Q9MZ6gCPCoaYzPKku_-K5sLTDYmjRsFqNAQ7ejUDx8LMbZcupAGS9FVbJXNiH89YVGI5Es9vERUwkVZpOe3-40tNjcyKaGp_EN23pzLRNT_OmfPCPYtAz3VZPyiW1jP4sv_9xy9wWoHpYMKdJGqcRyJkA2r2hINq1bAuIoKH_2GqO7YG-RDGs4ZK61ivytSvSD8ei5wzQ_mX1wZ-Lue5fNxnG-Z2__YbRiqYpbzocML-gZ"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: "var(--color-primary)" , opacity: 0.15 }}></div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
                Unlock the Infinite <br />
                <span className="gradient-text">Library of Intelligence.</span>
              </h1>
              <p className="text-on-surface-variant max-w-md text-lg font-medium leading-relaxed">
                Step into the Ethereal Laboratory where artificial intelligence
                synthesizes centuries of knowledge into a focused learning experience.
              </p>
            </div>
          </div>

          {/* Right — Auth form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden border border-outline-variant/30"
                 style={{ backgroundColor: "var(--color-surface-container-low)" }}>
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: "var(--color-primary)", opacity: 0.1 }}></div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-on-surface mb-2">Welcome Back</h2>
                <p className="text-on-surface-variant text-sm">Enter your credentials to access your library.</p>
              </div>

              {/* Google Sign-In */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 border rounded-full py-3.5 px-6 transition-all duration-300 hover:scale-[1.01] active:scale-95 mb-6"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-outline-variant)",
                  color: "var(--color-on-surface)"
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-1.08.75-2.33 1.19-3.71 1.19-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.87 14.26c-.22-.66-.35-1.36-.35-2.08s.13-1.42.35-2.08V7.26H2.18C1.43 8.76 1 10.45 1 12s.43 3.24 1.18 4.74l3.69-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.26l3.69 2.84c.86-2.59 3.28-4.51 6.13-4.51z" fill="#EA4335"></path>
                </svg>
                <span className="text-sm font-semibold">Continue with Google</span>
              </button>

              {/* Divider */}
              <div className="relative my-6 flex items-center">
                <div className="flex-grow border-t" style={{ borderColor: "var(--color-outline-variant)" }}></div>
                <span className="px-4 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">or use email</span>
                <div className="flex-grow border-t" style={{ borderColor: "var(--color-outline-variant)" }}></div>
              </div>

              {/* Form */}
              <form className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-2">Email Address</label>
                  <input
                    className="w-full rounded-full px-5 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all outline-none border border-outline-variant/40"
                    style={{ backgroundColor: "var(--color-surface-container)" }}
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Password</label>
                    <a className="text-[10px] uppercase tracking-widest text-primary font-bold hover:underline" href="#">Forgot?</a>
                  </div>
                  <input
                    className="w-full rounded-full px-5 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary transition-all outline-none border border-outline-variant/40"
                    style={{ backgroundColor: "var(--color-surface-container)" }}
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                {/* Submit — always readable in both modes */}
                <button
                  className="w-full py-4 rounded-full font-extrabold text-sm tracking-widest uppercase transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg text-white"
                  style={{
                    background: "linear-gradient(135deg, #5b52d9, #0077a8)",
                    boxShadow: "0 8px 24px rgba(91, 82, 217, 0.35)"
                  }}
                  type="submit"
                >
                  Sign In to Platform
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-on-surface-variant">
                New to the laboratory?{" "}
                <a className="text-primary font-bold hover:underline" href="#">Create an account</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 border-t border-outline-variant/20" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="flex gap-8">
            <a className="text-[10px] uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-[10px] uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-[10px] uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#">Cookie Settings</a>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-on-surface-variant/60">
            © 2024 Book AI Platform. The Ethereal Laboratory.
          </p>
        </div>
      </footer>
    </>
  );
}
