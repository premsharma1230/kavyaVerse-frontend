"use client";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="w-full bg-white shadow-sm py-3 px-6 flex items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/" className="hover:text-blue-600">
            KavyaVerse
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#" className="hover:text-blue-600">
            Explore
          </Link>
          <Link href="#" className="hover:text-blue-600">
            Contests
          </Link>
          <Link href="#" className="hover:text-blue-600">
            Workshops
          </Link>
          <Link href="/community" className="hover:text-blue-600">
            Community
          </Link>
        </nav>
        <div className="flex gap-2">
          <Link href="/signUP">
            <button className="px-4 py-1.5 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="px-4 py-1.5 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Login
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};
