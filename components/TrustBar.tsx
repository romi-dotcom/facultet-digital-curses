import FadeUp from "./FadeUp";

const GraduateIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const signals = [
  { Icon: GraduateIcon, value: "2,147+", label: "Graduates since 2019" },
  { Icon: StarIcon,     value: "4.9 / 5", label: "Rating from 312 reviews" },
  { Icon: ShieldIcon,   value: "Licensed", label: "Ministry of Education Portugal" },
  { Icon: CheckCircleIcon, value: "94%", label: "Student visa approval rate" },
  { Icon: MapPinIcon,   value: "2 Campuses", label: "Lisbon (Baixa) & Porto (Aliados)" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5 py-6">
        <FadeUp>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {signals.map(({ Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-accent flex-shrink-0">
                  <Icon />
                </span>
                <div className="leading-tight">
                  <span className="font-semibold text-brand text-sm">{value}</span>
                  <span className="text-slate-400 text-xs block">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
