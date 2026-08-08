import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Container className="py-[var(--section-padding)] bg-[var(--agaran-blue-soft)]" as="section">
      <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
        <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold tracking-tight text-[var(--agaran-text-primary)]">
          Have a problem worth solving?
        </h2>
        <p className="text-lg leading-relaxed text-[var(--agaran-text-secondary)]">
          Let&apos;s build the right system for it.
        </p>
        <div className="pt-4">
          <Button variant="primary" href="/contact">
            Start a Conversation
          </Button>
        </div>
      </div>
    </Container>
  );
}
