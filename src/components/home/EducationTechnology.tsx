import Container from "@/components/ui/Container";

const modules = [
  "Admissions",
  "Academics",
  "Learning",
  "Assessment",
  "Analytics",
  "AI",
];

export default function EducationTechnology() {
  return (
    <Container className="py-[var(--section-padding)] bg-white" as="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold tracking-tight text-[var(--agaran-text-primary)]">
            Technology for how people learn.
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-[var(--agaran-text-secondary)]">
            From learning platforms to coaching management systems, we build
            technology that connects education, operations, and intelligence.
          </p>
          <p className="max-w-lg text-[15px] leading-relaxed text-[var(--agaran-text-muted)]">
            Our education technology work spans LMS platforms, course builders,
            curriculum management, live classes, examinations, and AI-powered
            learning tools.
          </p>
        </div>

        {/* Right: Visual ecosystem */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            {modules.map((mod, index) => (
              <div
                key={mod}
                className="rounded-xl border border-[var(--agaran-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--agaran-blue-muted)] hover:bg-[var(--agaran-blue-soft)]"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span className="text-sm font-medium text-[var(--agaran-text-primary)]">
                  {mod}
                </span>
              </div>
            ))}
          </div>
          {/* Connecting line decoration */}
          <div
            className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[var(--agaran-blue-muted)] rounded-tr-3xl opacity-50"
            aria-hidden="true"
          />
        </div>
      </div>
    </Container>
  );
}
