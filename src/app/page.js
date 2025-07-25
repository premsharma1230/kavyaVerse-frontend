"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [homeData, setHomeData] = useState(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homepage`)
      .then(res => res.json())
      .then(data => setHomeData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to KavyaVerse</h1>
      <div className="flex space-x-4 mb-8">
        <Link href="/pages/login">
          <span className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
            Login
          </span>
        </Link>
        <Link href="/pages/signUP">
          <span className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer">
            Sign Up
          </span>
        </Link>
      </div>
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md text-center">
        {homeData ? (
          <pre className="text-left text-xs overflow-x-auto">
            {JSON.stringify(homeData, null, 2)}
          </pre>
        ) : (
          <p className="text-gray-700">Loading homepage data...</p>
        )}
      </div>
    </div>
  );
}
