import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We start by understanding the problem, the domain, and the people involved.",
  },
  {
    number: "02",
    title: "Architect",
    description: "We design the right system architecture for long-term scalability.",
  },
  {
    number: "03",
    title: "Build",
    description: "We build the foundation with clean, maintainable code.",
  },
  {
    number: "04",
    title: "Automate",
    description: "We connect systems and automate repetitive workflows.",
  },
  {
    number: "05",
    title: "Add Intelligence",
    description: "We add AI where it creates meaningful value.",
  },
  {
    number: "06",
    title: "Scale",
    description: "We ensure the system can grow with the business.",
  },
];

export default function HowWeWork() {
  return (
    <Container className="py-[var(--section-padding)] bg-[var(--agaran-blue-soft)]" as="section">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold tracking-tight text-[var(--agaran-text-primary)]">
          From problem to intelligent system.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--agaran-text-secondary)]">
          We don&apos;t jump directly to tools. We understand the problem first, then
          build the right system around it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-3">
            <span className="text-sm font-medium tracking-widest text-[var(--agaran-blue)]">
              {step.number}
            </span>
            <h3 className="text-xl font-semibold text-[var(--agaran-text-primary)]">
              {step.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[var(--agaran-text-secondary)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
