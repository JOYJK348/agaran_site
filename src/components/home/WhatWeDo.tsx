import Container from "@/components/ui/Container";

const capabilities = [
  {
    title: "Custom Software",
    description:
      "CRM, ERP, SaaS, e-commerce, and custom business platforms built around real operational needs.",
  },
  {
    title: "Education Technology",
    description:
      "Learning platforms, coaching management systems, academic workflows, and intelligent tools for education.",
  },
  {
    title: "Business Automation",
    description:
      "Connected workflows that reduce repetitive work and help businesses operate more efficiently.",
  },
  {
    title: "AI & Intelligent Systems",
    description:
      "AI agents, assistants, and intelligent workflows that understand context and help systems take meaningful action.",
  },
];

export default function WhatWeDo() {
  return (
    <Container className="py-[var(--section-padding)] bg-white" as="section">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold tracking-tight text-[var(--agaran-text-primary)]">
          We build. We automate. We add intelligence.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--agaran-text-secondary)]">
          From custom platforms to intelligent systems, we create technology
          that solves real problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((capability) => (
          <div
            key={capability.title}
            className="group rounded-2xl border border-[var(--agaran-border)] bg-white p-8 transition-all duration-200 hover:border-[var(--agaran-blue-muted)] hover:bg-[var(--agaran-blue-soft)] hover:shadow-sm"
          >
            <h3 className="text-xl font-semibold text-[var(--agaran-text-primary)] mb-3">
              {capability.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[var(--agaran-text-secondary)]">
              {capability.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
