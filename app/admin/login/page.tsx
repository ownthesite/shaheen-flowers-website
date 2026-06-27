"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin/blogs");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while connecting. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100 animate-in fade-in zoom-in-95 duration-500">

        {/* EDITORIAL HEADER */}
        <div className="mb-10 text-center flex flex-col items-center">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-stone-200 bg-[#FAFAFA] text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
            Secure Access
          </span>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900">
            Admin <span className="font-serif italic text-stone-500">Portal</span>
          </h1>
        </div>

        {/* LOGIN FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 text-red-600 text-sm font-light text-center rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full bg-[#FAFAFA] border border-stone-200 rounded-xl px-5 py-4 font-light text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-all"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full bg-[#FAFAFA] border border-stone-200 rounded-xl px-5 py-4 font-light text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-all"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-stone-900 text-white px-6 py-4 rounded-xl text-sm font-medium uppercase tracking-widest hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center group"
          >
            {isLoading ? (
              <span className="animate-pulse">Authenticating...</span>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
