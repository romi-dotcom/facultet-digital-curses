export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #1E293B 0%, #2A1F1A 100%)" }}>
      {/* ── Mobile ── */}
      <div className="md:hidden" style={{ padding: "48px 20px 32px" }}>
        {/* Brand */}
        <div className="flex flex-col gap-4" style={{ paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex items-center gap-2">
            <div
              style={{
                width: 32, height: 32, borderRadius: 8,
                background: "linear-gradient(135deg, #E85D26, #F97316)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 700 }}>Facultet School</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6 }}>
            Licensed professional programmes for international students in Portugal. Evening classes, real campus, official AIMA residence permit renewal documents.
          </p>
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
            </svg>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>DGERT Licensed Institution</span>
          </div>
        </div>

        {/* Links row */}
        <div className="flex justify-between" style={{ padding: "32px 0" }}>
          <div className="flex flex-col gap-3">
            <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>Programmes</span>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Digital Marketing</a>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Data Science</a>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Project Management</a>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>View all →</a>
          </div>
          <div className="flex flex-col gap-3">
            <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>Resources</span>
            <a href="#consult" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Admission Requirements</a>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Tuition & Fees</a>
            <a href="#success-stories" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Success Stories</a>
          </div>
        </div>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/351300509112"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            width: "100%", height: 48, borderRadius: 8,
            background: "#25D366", color: "white",
            fontSize: 15, fontWeight: 700, textDecoration: "none",
            marginBottom: 32,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Write on WhatsApp
        </a>

        {/* Contact block */}
        <div className="flex flex-col gap-4" style={{ paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>Contact</span>
          <div className="flex flex-col gap-1">
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 700 }}>Lisbon Campus</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Av. da República 51, 1495-110 Algés</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>Mon–Fri 11:00–18:00</span>
            <a href="https://calendar.app.google/CPWNYw46Rnq3JCiC9" style={{ color: "#E85D26", fontSize: 11, textDecoration: "none" }}>Book appointment →</a>
          </div>
          <div className="flex flex-col gap-1">
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 700 }}>Porto Campus</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Rua Augusto Rosa, 79, office 0.23</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>Mon–Fri 11:00–18:00</span>
            <a href="https://calendar.app.google/o6Lqgwhkwp5Qcdbv7" style={{ color: "#E85D26", fontSize: 11, textDecoration: "none" }}>Book appointment →</a>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:ola@facultet.school" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>ola@facultet.school</a>
          </div>
        </div>

        {/* Lower part */}
        <div style={{ paddingTop: 24 }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textAlign: "center", marginBottom: 12 }}>
            © 2026 Facultet School. Licensed by DGERT · Registered with AIMA
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.facultet.school/privacy-policy" style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textDecoration: "none" }}>Privacy Policy</a>
            <a href="https://www.instagram.com/facultet.school" style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textDecoration: "none" }}>Instagram</a>
          </div>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block" style={{ padding: "60px 160px 32px" }}>
        {/* Upper part — 4 columns */}
        <div className="flex gap-12" style={{ paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4" style={{ flex: 1 }}>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: "linear-gradient(135deg, #E85D26, #F97316)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 700 }}>Facultet School</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6 }}>
              Licensed professional programmes for international students in Portugal. Evening classes, real campus, official AIMA residence permit renewal documents.
            </p>
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
              </svg>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>DGERT Licensed Institution</span>
            </div>
          </div>

          {/* Col 2 — Programmes */}
          <div className="flex flex-col gap-3" style={{ flex: 1 }}>
            <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>Programmes</span>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Digital Marketing</a>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Data Science</a>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Project Management</a>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>View all →</a>
            <a
              href="#consult"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "8px 16px", borderRadius: 6,
                background: "#E85D26", color: "white",
                fontSize: 13, fontWeight: 600, textDecoration: "none", marginTop: 8,
              }}
            >
              Apply Now
            </a>
          </div>

          {/* Col 3 — Resources */}
          <div className="flex flex-col gap-3" style={{ flex: 1 }}>
            <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>Resources</span>
            <a href="#consult" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Admission Requirements</a>
            <a href="#programmes" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Tuition & Fees</a>
            <a href="#success-stories" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Success Stories</a>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-4" style={{ flex: 1 }}>
            <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>Contact</span>
            <div className="flex flex-col gap-1">
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 700 }}>Lisbon Campus</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Av. da República 51, 1495-110 Algés</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>Mon–Fri 11:00–18:00</span>
              <a href="https://calendar.app.google/CPWNYw46Rnq3JCiC9" style={{ color: "#E85D26", fontSize: 11, textDecoration: "none" }}>Book appointment →</a>
            </div>
            <div className="flex flex-col gap-1">
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 700 }}>Porto Campus</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Rua Augusto Rosa, 79, office 0.23</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>Mon–Fri 11:00–18:00</span>
              <a href="https://calendar.app.google/o6Lqgwhkwp5Qcdbv7" style={{ color: "#E85D26", fontSize: 11, textDecoration: "none" }}>Book appointment →</a>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:ola@facultet.school" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>ola@facultet.school</a>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <a href="https://wa.me/351300509112" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>
                WhatsApp
              </a>
            </div>
            <a
              href="https://wa.me/351300509112"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                padding: "8px 16px", borderRadius: 6,
                background: "#25D366", color: "white",
                fontSize: 13, fontWeight: 600, textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Lower part */}
        <div className="flex items-center justify-between" style={{ paddingTop: 24 }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
            © 2026 Facultet School. Licensed by DGERT · Registered with AIMA
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facultet.school/privacy-policy" style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, textDecoration: "none" }}>Privacy Policy</a>
            <a href="https://www.instagram.com/facultet.school" style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, textDecoration: "none" }}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
