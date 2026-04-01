"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
