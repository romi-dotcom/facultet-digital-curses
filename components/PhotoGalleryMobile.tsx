"use client";

import { useRef, useState, useEffect } from "react";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=520&q=80",
    width: 260,
    radius: 12,
    caption: "Lisbon Classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=440&q=80",
    width: 220,
    radius: 8,
    caption: "Porto Campus",
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=440&q=80",
    width: 220,
    radius: 8,
    caption: "Study Hall",
  },
  {
    url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=440&q=80",
    width: 220,
    radius: 8,
    caption: "Faculty Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=440&q=80",
    width: 220,
    radius: 8,
    caption: "Student Life",
  },
];

export default function PhotoGalleryMobile() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const totalScrollable = el.scrollWidth - el.clientWidth;
      const segmentWidth = totalScrollable / (photos.length - 1);
      const index = Math.round(scrollLeft / segmentWidth);
      setActive(Math.min(Math.max(index, 0), photos.length - 1));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-white py-10 md:hidden overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2 px-5 mb-5">
        <h2 className="text-[#1E293B] text-[22px] font-bold leading-tight">
          Real Photos of Our Campuses
        </h2>
        <p className="text-[#64748B] text-[14px] leading-[1.5]">
          No stock photos. These are our actual classrooms, students, and faculty.
        </p>
      </div>

      {/* Photo strip */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          gap: 12,
          height: 220,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div style={{ width: 20, flexShrink: 0 }} />
        {photos.map((photo, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative overflow-hidden"
            style={{
              width: photo.width,
              height: 220,
              borderRadius: photo.radius,
              backgroundImage: `url(${photo.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              scrollSnapAlign: "start",
            }}
          >
            {/* Caption overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 12,
                right: 12,
              }}
            >
              <span
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 12,
                  fontWeight: 600,
                  textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                }}
              >
                {photo.caption}
              </span>
            </div>
          </div>
        ))}
        <div style={{ width: 20, flexShrink: 0 }} />
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center mt-5" style={{ gap: 6 }}>
        {photos.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: i === active ? "#E85D26" : "#CBD5E1",
              transition: "width 0.2s ease, background-color 0.2s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
