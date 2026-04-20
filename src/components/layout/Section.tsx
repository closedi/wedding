import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title?: string;
}>;

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
