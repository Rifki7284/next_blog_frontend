"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!q.trim()) return;
    router.push(`/search?q=${encodeURIComponent(q)}&page=1`);
  };

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm transition-all focus-within:border-blue-500 focus-within:ring-3 focus-within:ring-blue-500/10 overflow-hidden">
        {/* Icon kiri */}
        <span className="pl-3.5 pr-2 text-gray-400 flex items-center shrink-0">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </span>

        {/* Input */}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          type="search"
          id="search"
          className="flex-1 min-w-0 py-3 text-sm text-gray-900 placeholder:text-gray-400 bg-transparent border-none outline-none" // ✅ tambah min-w-0
          placeholder="Search articles..."
        />

        {/* Tombol clear — muncul saat ada teks */}
        {q && (
          <button
            type="button"
            onClick={() => setQ("")}
            className="p-1 mr-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors shrink-0"
            aria-label="Clear search"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Tombol Search */}
        <button
          type="submit"
          className="m-1.5 px-3 sm:px-4 py-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all shrink-0"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  );
}
