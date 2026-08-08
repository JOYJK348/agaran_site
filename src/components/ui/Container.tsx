interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
}

export default function Container({
  children,
  className = "",
  as: Component = "section",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`w-full px-[var(--container-padding)] ${className}`}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {children}
      </div>
    </Component>
  );
}
