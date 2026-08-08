import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const workItems = [
  {
    category: "Education Technology",
    title: "Learning Management Platform",
    description:
      "A comprehensive LMS with course building, curriculum management, assessments, and AI-powered learning tools.",
  },
  {
    category: "Business Systems",
    title: "Business Automation Suite",
    description:
      "Connected workflows, CRM integration, and automation systems for streamlined business operations.",
  },
  {
    category: "AI & Automation",
    title: "Intelligent AI Agent System",
    description:
      "AI assistant and agent workflow system with context understanding, tool integration, and automated actions.",
  },
  {
    category: "Academic & Research",
    title: "Academic Project Systems",
    description:
      "Various academic and research projects spanning software systems, AI concepts, and automation solutions.",
  },
];

export default function SelectedWork() {
  return (
    <Container className="py-[var(--section-padding)] bg-white" as="section">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold tracking-tight text-[var(--agaran-text-primary)]">
          Selected Work
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--agaran-text-secondary)]">
          Real projects that demonstrate what we build.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workItems.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-[var(--agaran-border)] bg-white p-8 transition-all duration-200 hover:border-[var(--agaran-blue-muted)] hover:shadow-sm"
          >
            <span className="mb-3 inline-block text-xs font-medium tracking-widest uppercase text-[var(--agaran-blue)]">
              {item.category}
            </span>
            <h3 className="text-xl font-semibold text-[var(--agaran-text-primary)] mb-3">
              {item.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[var(--agaran-text-secondary)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex">
        <Button variant="ghost" href="/work">
          View All Work &rarr;
        </Button>
      </div>
    </Container>
  );
}
