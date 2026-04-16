"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const photos = [
  {
    url: "/gallery/gallery-7.png",
    caption: "Facultet Campus",
  },
  {
    url: "/gallery/gallery-8.png",
    caption: "Workshop",
  },
  {
    url: "/gallery/gallery-1.png",
    caption: "Study Hall",
  },
  {
    url: "/gallery/gallery-2.png",
    caption: "Mentoring Room",
  },
  {
    url: "/gallery/gallery-6.png",
    caption: "Classroom Session",
  },
];

export default function PhotoGalleryMobile() {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  // ① Section enter
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const total = el.scrollWidth - el.clientWidth;
      const seg   = total / (photos.length - 1);
      if (seg > 0) setActive(Math.min(Math.max(Math.round(el.scrollLeft / seg), 0), photos.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // A) Dots clickable
  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.children[0] as HTMLElement;
    const step = firstCard.offsetWidth + 12;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="bg-white py-10 md:hidden">

      {/* ① Header — useInView fade */}
      <motion.div
        className="flex flex-col gap-2 px-5 mb-5 items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-[#1E293B] text-[22px] font-bold leading-tight">
          Real Photos of Our Campuses
        </h2>
        <p className="text-[#64748B] text-[14px] leading-[1.5]">
          No stock photos. These are our actual classrooms, students, and faculty.
        </p>
      </motion.div>

      {/* C) Photo strip — all same width, consistent peek */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{
            gap: 12,
            height: 220,
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: 20,
            WebkitOverflowScrolling: "touch",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {photos.map((photo, i) => (
            // D) Tap feedback
            <div
              key={i}
              className="flex-shrink-0 relative overflow-hidden transition-[filter] duration-150 active:brightness-90"
              style={{
                width: "calc(100vw - 56px)",
                height: 220,
                borderRadius: 12,
                backgroundImage: `url(${photo.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                scrollSnapAlign: "start",
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)",
                  // D) dim inactive
                  opacity: i === active ? 1 : 0.75,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* ② Caption slide-up on active */}
              <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${i}-${i === active}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: i === active ? 1 : 0.55, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{
                      color: "rgba(255,255,255,0.92)",
                      fontSize: 12,
                      fontWeight: 600,
                      textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                      display: "block",
                    }}
                  >
                    {photo.caption}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* B) Dots + counter */}
      <div className="flex items-center justify-center mt-5 gap-3">
        {/* A) Dots — clickable */}
        <div className="flex items-center gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: i === active ? "#E85D26" : "#CBD5E1",
                transition: "width 0.2s ease, background-color 0.2s ease",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* B) Counter */}
        <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500, minWidth: 28 }}>
          {active + 1} / {photos.length}
        </span>
      </div>

    </section>
  );
}
