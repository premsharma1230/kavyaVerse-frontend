import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../components/header";

export default function HomePage() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homepage`)
      .then(res => res.json())
      .then(data => {
        setHomeData(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f3]">
        <span className="text-lg text-gray-500">Loading homepage...</span>
      </div>
    );
  }

  if (!homeData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f3]">
        <span className="text-lg text-red-500">
          Failed to load homepage data.
        </span>
      </div>
    );
  }

  const { trendingPoems, featuredQuotes, contests } = homeData;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full flex justify-center items-center bg-[#e9d8c3] py-10 md:py-16 px-4">
        <div className="max-w-4xl w-full flex flex-col items-center text-center relative">
          <img
            src="/window.svg"
            alt="Notebook"
            className="w-full max-w-2xl rounded-lg shadow-lg object-cover mb-6"
            style={{ background: "#f8f6f3" }}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2">
            Express your thoughts in words
          </h1>
          <p className="text-white/90 mb-6 text-lg">
            Join thousands of poets and writers sharing stories, quotes, and
            poems.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold text-base hover:bg-blue-700 transition">
            Start Writing
          </button>
        </div>
      </section>

      {/* Trending Poems */}
      <section className="max-w-6xl mx-auto w-full mt-12 px-4">
        <h2 className="text-xl font-bold mb-4">Trending Poems</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingPoems.map((poem, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-5 flex flex-col items-center"
            >
              <img
                src={`/${poem.image}`}
                alt={poem.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="font-semibold text-lg mb-1">{poem.title}</div>
              <div className="text-gray-500 text-sm">{poem.subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Quotes */}
      <section className="max-w-6xl mx-auto w-full mt-12 px-4">
        <h2 className="text-xl font-bold mb-4">Featured Quotes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredQuotes.map((quote, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-5 flex flex-col items-center"
            >
              <img
                src={`/${quote.image}`}
                alt={quote.author}
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="italic text-base mb-1">"{quote.text}"</div>
              <div className="text-gray-500 text-sm">- {quote.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contests & Workshops */}
      <section className="max-w-6xl mx-auto w-full mt-12 px-4 mb-16">
        <h2 className="text-xl font-bold mb-4">Contests & Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contests.map((contest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-5 flex flex-col items-center"
            >
              <img
                src={`/${contest.image}`}
                alt={contest.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="font-semibold text-lg mb-1">{contest.title}</div>
              <div className="text-gray-500 text-sm mb-4">
                {contest.description}
              </div>
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded font-semibold hover:bg-blue-700 transition">
                {contest.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white border-t py-4 flex flex-col md:flex-row items-center justify-between px-6 text-sm text-gray-500">
        <div className="flex gap-6 mb-2 md:mb-0">
          <Link href="#" className="hover:underline">
            Privacy
          </Link>
          <Link href="#" className="hover:underline">
            Terms
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
        </div>
        <div>&copy; {new Date().getFullYear()} KavyaVerse</div>
      </footer>
    </div>
  );
}
