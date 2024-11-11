"use client";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-4xl font-bold mb-4">Welcome to Coin Market</h1>
    <p className="text-lg mb-8">Check live cryptocurrency rates here.</p>
    
      <Link href="/coin-market" className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">
        Go to Coin Market
      </Link>
   
  </div>
  );
}
