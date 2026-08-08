import Container from "@/components/ui/Container";

const flowItems = [
  { label: "Customer", x: "50%", y: "0%" },
  { label: "WhatsApp", x: "0%", y: "40%" },
  { label: "AI Agent", x: "100%", y: "40%" },
  { label: "CRM", x: "0%", y: "80%" },
  { label: "Business Action", x: "100%", y: "80%" },
];

export default function BusinessAutomation() {
  return (
    <Container className="py-[var(--section-padding)] bg-[var(--agaran-blue-soft)]" as="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold tracking-tight text-[var(--agaran-text-primary)]">
            Technology for how businesses operate.
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-[var(--agaran-text-secondary)]">
            We connect systems, automate workflows, and build intelligent agents
            that help businesses move faster.
          </p>
          <p className="max-w-lg text-[15px] leading-relaxed text-[var(--agaran-text-muted)]">
            From CRM and ERP systems to WhatsApp automation and AI-powered
            workflows, we build technology that streamlines real business
            operations.
          </p>
        </div>

        {/* Right: Automation flow visual */}
        <div className="relative order-1 lg:order-2">
          <div className="relative w-full aspect-square max-w-[400px] mx-auto">
            {/* Background circle */}
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-[var(--agaran-blue-muted)]" aria-hidden="true" />
            
            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[var(--agaran-blue)] flex items-center justify-center">
              <span className="text-xs font-semibold text-white text-center leading-tight">
                System
              </span>
            </div>

            {/* Flow nodes */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 rounded-lg bg-white border border-[var(--agaran-border)] px-4 py-2 text-sm font-medium text-[var(--agaran-text-primary)] shadow-sm">
              Customer
            </div>
            <div className="absolute top-[35%] left-[5%] rounded-lg bg-white border border-[var(--agaran-border)] px-4 py-2 text-sm font-medium text-[var(--agaran-text-primary)] shadow-sm">
              WhatsApp
            </div>
            <div className="absolute top-[35%] right-[5%] rounded-lg bg-white border border-[var(--agaran-border)] px-4 py-2 text-sm font-medium text-[var(--agaran-text-primary)] shadow-sm">
              AI Agent
            </div>
            <div className="absolute top-[65%] left-[5%] rounded-lg bg-white border border-[var(--agaran-border)] px-4 py-2 text-sm font-medium text-[var(--agaran-text-primary)] shadow-sm">
              CRM
            </div>
            <div className="absolute top-[65%] right-[5%] rounded-lg bg-white border border-[var(--agaran-border)] px-4 py-2 text-sm font-medium text-[var(--agaran-text-primary)] shadow-sm">
              Business Action
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
