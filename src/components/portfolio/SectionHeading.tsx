import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  number,
  label,
  title,
  id,
  aside,
}: {
  number: string;
  label: string;
  title: ReactNode;
  id: string;
  aside?: ReactNode;
}) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="folio">
          <span className="text-primary">{number}</span> / {label}
        </p>
        <h2 id={id} className="display mt-3 text-[clamp(2.7rem,4.6vw,4rem)]">
          {title}
        </h2>
      </div>
      {aside && <div className="max-w-sm text-sm text-muted-foreground">{aside}</div>}
    </Reveal>
  );
}
