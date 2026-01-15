import React from 'react';
import { useState } from 'react';

const CounterApp = () => {
  // Lets make one couter app...
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }
  function decreaseNum() {
    setNum(num - 1);
  }
  function jump5Num() {
    setNum(num + 5);
  }
  function resetNum() {
    setNum(0);
  }

  const getStatusColor = () => {
    if (num > 0)
      return 'text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]';
    if (num < 0)
      return 'text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.6)]';
    return 'text-white';
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0f172a] overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-12 tracking-tighter">
        Quantum Counter
      </h1>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

        <div className="relative w-80 md:w-[600px] bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl flex flex-col items-center">
          <div className="relative mb-10">
            <span
              className={`text-8xl md:text-9xl font-black transition-all duration-500 tabular-nums ${getStatusColor()}`}
            >
              {num}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <button
              onClick={() => setNum(num + 1)}
              className="px-6 py-4 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 rounded-2xl text-white font-medium transition-all active:scale-95"
            >
              +1 Increment
            </button>

            <button
              onClick={() => setNum(num - 1)}
              className="px-6 py-4 bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/50 rounded-2xl text-white font-medium transition-all active:scale-95"
            >
              -1 Decrement
            </button>

            <button
              onClick={() => setNum(num + 5)}
              className="px-6 py-4 bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20 rounded-2xl text-white font-bold transition-all active:scale-95"
            >
              +5 Jump
            </button>

            <button
              onClick={() => setNum(0)}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white font-medium transition-all active:scale-95"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <p className="mt-8 text-slate-500 font-mono text-sm tracking-widest uppercase">
        Built with React & Tailwind CSS
      </p>
    </div>
  );
};

export default CounterApp;
