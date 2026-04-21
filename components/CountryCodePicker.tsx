"use client";

import { useState, useEffect, useRef } from "react";
import { countryCodes } from "@/lib/countryCodes";

interface Props {
  value: string;
  onChange: (code: string) => void;
}

export default function CountryCodePicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = countryCodes.find(c => c.code === value) ?? countryCodes[0];

  const filtered = search.trim()
    ? countryCodes.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.includes(search)
      )
    : countryCodes;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  return (
    <div ref={ref} className="relative flex-shrink-0">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1 h-full transition-colors"
        style={{
          padding: "0 8px 0 0",
          borderRight: "1px solid #E2E8F0",
          background: "transparent",
          marginRight: 8,
          minWidth: 72,
        }}
      >
        <span style={{ fontSize: 16 }}>{selected.flag}</span>
        <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{selected.code}</span>
        <svg
          width={12} height={12} viewBox="0 0 24 24" fill="none"
          stroke="#94A3B8" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: "transform 0.18s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 z-50 flex flex-col overflow-hidden"
          style={{
            top: "calc(100% + 6px)",
            width: 240,
            background: "white",
            borderRadius: 12,
            border: "1px solid #E2E8F0",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          {/* Search */}
          <div style={{ padding: "8px 10px", borderBottom: "1px solid #F1F5F9" }}>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search country…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full outline-none text-[#1E293B] placeholder-[#CBD5E1]"
              style={{ fontSize: 13, background: "transparent" }}
            />
          </div>

          {/* List */}
          <div style={{ maxHeight: 220, overflowY: "auto" }}>
            {filtered.length === 0 ? (
              <p style={{ padding: "10px 12px", fontSize: 13, color: "#94A3B8" }}>No results</p>
            ) : (
              filtered.map(c => (
                <button
                  key={c.code + c.name}
                  type="button"
                  onClick={() => { onChange(c.code); setOpen(false); setSearch(""); }}
                  className="w-full flex items-center gap-2 text-left transition-colors hover:bg-[#FFF7ED]"
                  style={{
                    padding: "9px 12px",
                    fontSize: 13,
                    color: c.code === value ? "#E85D26" : "#374151",
                    fontWeight: c.code === value ? 600 : 400,
                    background: c.code === value ? "#FFF7ED" : "transparent",
                    borderBottom: "1px solid #F8FAFC",
                  }}
                >
                  <span style={{ fontSize: 15, flexShrink: 0 }}>{c.flag}</span>
                  <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.name}</span>
                  <span style={{ color: "#94A3B8", fontSize: 12, flexShrink: 0 }}>{c.code}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
