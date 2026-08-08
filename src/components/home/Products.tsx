import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const productAreas = [
  "Admissions & Enrollment",
  "People Management",
  "Academics & Curriculum",
  "Learning Management",
  "Live Classes",
  "Examinations",
  "Question Banks",
  "Fees & Billing",
  "Communication",
  "Analytics",
  "AI-Powered Tools",
  "Platform Administration",
];

export default function Products() {
  return (
    <Container className="py-[var(--section-padding)] bg-white" as="section">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold tracking-tight text-[var(--agaran-text-primary)]">
          Built by Agaran. Designed to grow.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--agaran-text-secondary)]">
          We don&apos;t just build for others. We build our own products. Our
          coaching and education management platform is designed as a
          comprehensive system for modern learning institutions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
        {productAreas.map((area) => (
          <div
            key={area}
            className="rounded-lg border border-[var(--agaran-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--agaran-text-secondary)] transition-all duration-200 hover:border-[var(--agaran-blue-muted)] hover:text-[var(--agaran-blue)] hover:bg-[var(--agaran-blue-soft)]"
          >
            {area}
          </div>
        ))}
      </div>

      <div className="flex">
        <Button variant="secondary" href="/products">
          View All Products
        </Button>
      </div>
    </Container>
  );
}
