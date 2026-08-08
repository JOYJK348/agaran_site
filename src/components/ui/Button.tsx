import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--agaran-blue)] text-white hover:bg-[var(--agaran-blue-hover)] border border-transparent",
  secondary:
    "bg-transparent text-[var(--agaran-blue)] border border-[var(--agaran-blue)] hover:bg-[var(--agaran-blue-soft)]",
  ghost:
    "bg-transparent text-[var(--agaran-text-secondary)] border border-transparent hover:text-[var(--agaran-blue)] hover:bg-[var(--agaran-blue-soft)]",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-[15px] font-medium leading-none transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--agaran-blue)]";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    // Use next/link for internal links, regular anchor for external
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={combinedClassName} {...(anchorRest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={combinedClassName} {...(anchorRest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
