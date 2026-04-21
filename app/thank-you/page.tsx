import { Fragment } from "react";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You — Facultet School",
  description:
    "Your application has been received. A coordinator will contact you within 2 business hours via WhatsApp or phone.",
};

const steps = [
  {
    num: "1",
    numBg: "#E85D26",
    cardBg: "#F8FAFC",
    cardBorder: "#E2E8F0",
    title: "Coordinator calls you",
    body: "Within 2 business hours, your personal coordinator contacts you via WhatsApp or phone to discuss your situation and goals.",
    mobileBody: "Within 2 business hours via WhatsApp or phone.",
  },
  {
    num: "2",
    numBg: "#1E293B",
    cardBg: "#F8FAFC",
    cardBorder: "#E2E8F0",
    title: "Choose your programme",
    body: "Together we select the best programme for your goals and schedule. Evening classes, 13+ months, DGERT-licensed.",
    mobileBody: "Evening classes, 13+ months, DGERT-licensed.",
  },
  {
    num: "3",
    numBg: "#E85D26",
    cardBg: "#FFF1EC",
    cardBorder: "rgba(232,93,38,0.19)",
    title: "Start studying & renew permit",
    body: "Enrol, attend evening classes, and receive your official enrolment documents. Submit to AIMA and your student permit is renewed for another year.",
    mobileBody: "Receive your official enrolment documents and submit to AIMA.",
  },
];

const trustStats = [
  { val: "423+",  desktopLabel: "Students enrolled",   mobileLabel: "Students"        },
  { val: "200+",  desktopLabel: "Permits renewed",      mobileLabel: "Permits renewed" },
  { val: "DGERT", desktopLabel: "Licensed institution", mobileLabel: "Licensed"        },
  { val: "2 hrs", desktopLabel: "Response time",        mobileLabel: "Response time"   },
];

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="bg-[#F8FAFC] pt-[100px]">
          <div className="flex flex-col items-center gap-6 px-5 md:px-[160px] py-12 md:py-[120px]">

            {/* Check circle */}
            <div
              style={{
                width: 80, height: 80,
                borderRadius: "50%",
                background: "#E85D26",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 6px 24px rgba(232,93,38,0.5)",
                flexShrink: 0,
              }}
              className="md:!w-24 md:!h-24"
            >
              <svg
                width={40} height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-12 md:h-12"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Eyebrow */}
            <p
              style={{ color: "#E85D26", fontWeight: 700, letterSpacing: "2px", textAlign: "center" }}
              className="text-[10px] md:text-[11px] uppercase"
            >
              APPLICATION RECEIVED
            </p>

            {/* H1 */}
            <h1
              style={{ color: "#1E293B", fontWeight: 700, textAlign: "center" }}
              className="text-[28px] leading-[1.2] md:text-[52px] md:leading-[1.1] max-w-full md:max-w-[800px]"
            >
              Thank you!<br />
              We&apos;ll be in touch<span className="hidden md:inline"> soon</span>.
            </h1>

            {/* Subtitle */}
            <p
              style={{ color: "#64748B", lineHeight: 1.6, textAlign: "center" }}
              className="text-[15px] md:text-[18px] max-w-full md:max-w-[640px]"
            >
              Your application has been received. A coordinator will contact you within 2 business hours via WhatsApp or phone
              <span className="hidden md:inline"> to discuss next steps</span>.
            </p>


          </div>
        </section>

        {/* ── Next Steps ── */}
        <section className="bg-white">
          <div className="flex flex-col items-center gap-4 md:gap-12 px-5 md:px-[160px] py-10 md:py-20">

            <p
              style={{ color: "#E85D26", fontWeight: 700, letterSpacing: "2px", textAlign: "center" }}
              className="text-[10px] md:text-[11px] uppercase"
            >
              WHAT HAPPENS NEXT
            </p>

            <h2
              style={{ color: "#1E293B", fontWeight: 700, textAlign: "center" }}
              className="text-[22px] md:text-[36px]"
            >
              Your next 3 steps
            </h2>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:max-w-[1100px]">
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    background: step.cardBg,
                    border: `1px solid ${step.cardBorder}`,
                    borderRadius: 14,
                    padding: 20,
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                  className="md:flex-col md:rounded-2xl md:p-8 md:gap-4"
                >
                  {/* Number badge */}
                  <div
                    style={{
                      width: 32, height: 32,
                      borderRadius: 16,
                      background: step.numBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}
                    className="md:w-10 md:h-10 md:rounded-[20px]"
                  >
                    <span style={{ color: "white", fontWeight: 700, fontSize: 14 }} className="md:text-base">
                      {step.num}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1">
                    <h3
                      style={{ color: "#1E293B", fontWeight: 700 }}
                      className="text-[15px] md:text-[18px]"
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "#64748B", lineHeight: 1.5 }} className="text-[14px] md:text-[15px] md:leading-relaxed">
                      <span className="md:hidden">{step.mobileBody}</span>
                      <span className="hidden md:inline">{step.body}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Trust Strip ── */}
        <section style={{ background: "#1E293B" }}>
          <div className="px-5 md:px-[160px] py-8 md:py-10">
            <div className="flex items-center justify-between md:justify-center md:gap-12">
              {trustStats.map((stat, i) => (
                <Fragment key={stat.val}>
                  {i > 0 && (
                    <div style={{ width: 1, background: "#334155" }} className="h-9 md:h-10 hidden md:block mx-0" />
                  )}
                  <div className="flex flex-col items-center gap-0.5 md:gap-1">
                    <span style={{ color: "#E85D26", fontWeight: 700 }} className="text-[22px] md:text-[28px]">
                      {stat.val}
                    </span>
                    <span style={{ color: "#94A3B8" }} className="text-[11px] md:text-[14px] text-center">
                      <span className="md:hidden">{stat.mobileLabel}</span>
                      <span className="hidden md:inline">{stat.desktopLabel}</span>
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
