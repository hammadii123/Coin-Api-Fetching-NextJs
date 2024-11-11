"use client";
import { useState, useEffect } from "react";

interface CoinMarketData {
  rates: {
    BTC?: number;
    BNB?: number;
    ETH?: number;
    USDT?: number;
    SOL?: number;
    DOGE?: number;
  };
}

export default function CoinMarket() {
  const API_KEY = process.env.NEXT_PUBLIC_COIN_API_KEY;

  const [data, setData] = useState<CoinMarketData | null>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted: CoinMarketData) => {
        console.log("JSON Converted Data: ", jsonConverted);
        setData(jsonConverted);
      });
    // .catch((error) => console.error("Error fetching data: ", error)); // Handle fetch error
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Live Cryptocurrency Rates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-700 rounded-lg shadow-lg w-80 sm:w-full lg:w-4/5 xl:w-3/4">
        <div className="card bg-gray-800 rounded-lg shadow-lg p-4 text-center border border-gray-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">BTC</h2>
          <p className="text-3xl font-bold">
            {data?.rates?.BTC ? `$${data.rates.BTC.toFixed(2)}` : "Loading..."}
          </p>
        </div>

        <div className="card bg-gray-800 rounded-lg shadow-lg p-4 text-center border border-gray-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-yellow-500">BNB</h2>
          <p className="text-3xl font-bold">
            {data?.rates?.BNB ? `$${data.rates.BNB.toFixed(2)}` : "Loading..."}
          </p>
        </div>

        <div className="card bg-gray-800 rounded-lg shadow-lg p-4 text-center border border-gray-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-red-500">ETH</h2>
          <p className="text-3xl font-bold">
            {data?.rates?.ETH ? `$${data.rates.ETH.toFixed(2)}` : "Loading..."}
          </p>
        </div>

        <div className="card bg-gray-800 rounded-lg shadow-lg p-4 text-center border border-gray-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-green-600">USDT</h2>
          <p className="text-3xl font-bold">
            {data?.rates?.USDT
              ? `$${data.rates.USDT.toFixed(2)}`
              : "Loading..."}
          </p>
        </div>

        <div className="card bg-gray-800 rounded-lg shadow-lg p-4 text-center border border-gray-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">SOL</h2>
          <p className="text-3xl font-bold">
            {data?.rates?.SOL ? `$${data.rates.SOL.toFixed(2)}` : "Loading..."}
          </p>
        </div>

        <div className="card bg-gray-800 rounded-lg shadow-lg p-4 text-center border border-gray-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-pink-500">DOGE</h2>
          <p className="text-3xl font-bold">
            {data?.rates?.DOGE
              ? `$${data.rates.DOGE.toFixed(2)}`
              : "Loading..."}
          </p>
        </div>
      </div>

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200"
      >
        Back to Home
      </button>
    </div>
  );
}
