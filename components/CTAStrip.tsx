interface CTAStripProps {
  heading: string;
  sub?: string;
  btnText: string;
  trust?: string;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  headingSize?: "large" | "normal";
}

export default function CTAStrip({
  heading,
  sub,
  btnText,
  trust,
  mobileOnly,
  desktopOnly,
  headingSize = "normal",
}: CTAStripProps) {
  const wrapClass = mobileOnly ? "md:hidden" : desktopOnly ? "hidden md:block" : "";

  return (
    <section
      className={`${wrapClass} py-12 px-6 lg:px-20`}
      style={{ background: "linear-gradient(180deg, #1E293B 0%, #2A1F1A 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-4 text-center">
        {/* Heading — 16/500 mobile (normal), 28/bold desktop (large) */}
        <p
          className="text-white"
          style={{
            fontSize: headingSize === "large" ? 28 : 16,
            fontWeight: headingSize === "large" ? 700 : 500,
            lineHeight: 1.5,
            maxWidth: 600,
          }}
        >
          {heading}
        </p>

        {sub && (
          <p
            className="text-white/85 max-w-[600px] leading-relaxed"
            style={{ fontSize: headingSize === "large" ? 16 : 13 }}
            dangerouslySetInnerHTML={{ __html: sub }}
          />
        )}

        <a
          href="#consult"
          className="mt-1 inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          style={{ fontSize: 15, padding: "14px 36px" }}
        >
          {btnText}
        </a>

        {trust && (
          <p className="text-white/50" style={{ fontSize: 12, lineHeight: 1.5 }}>{trust}</p>
        )}
      </div>
    </section>
  );
}
