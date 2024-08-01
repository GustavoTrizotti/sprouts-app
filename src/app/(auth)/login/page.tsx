import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-1 space-x-4">
      <section className="flex flex-1 items-center justify-center">
        <div className="flex md:w-4/6 w-full justify-center flex-col p-4 space-y-6">
          <div className="flex flex-col space-y-2 items-center justify-center">
            <h2 className="text-xl font-bold">Login to your account</h2>
            <div className="flex flex-row space-x-1 items-center justify-center">
              <p className="text-sm opacity-80">
                Enter your email address to Log-In
              </p>
            </div>
          </div>
          <LoginForm />
          <div className="border border-white/10 m-2 " />
          <div className="flex flex-row items-center justify-center space-x-1">
            <span className="text-sm opacity-60">Dont have an account?</span>
            <Link
              className="text-sm underline hover:opacity-80 transition-opacity"
              href="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
