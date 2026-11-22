import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { profile } from "@/content/portfolio";

const KEY = "chabi-portfolio-welcome-v3";

export function useWelcome() {
  const [open, setOpen] = useState(false);
  const [replay, setReplay] = useState(false);
  useEffect(() => {
    const force = new URLSearchParams(window.location.search).get("intro") === "1";
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "seen";
    } catch {
      /* storage unavailable */
    }
    if (force || (!seen && !window.location.hash)) {
      setOpen(true);
      try {
        sessionStorage.setItem(KEY, "seen");
      } catch {
        /* storage unavailable */
      }
    }
  }, []);
  return {
    open,
    replay,
    show: () => {
      setReplay(true);
      setOpen(true);
    },
    close: () => setOpen(false),
  };
}

export function Welcome({ open, replay, onClose }: { open: boolean; replay: boolean; onClose: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback(() => {
    setLeaving(true);
    window.setTimeout(() => {
      setLeaving(false);
      onClose();
    }, 330);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    buttonRef.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    const timer = replay ? undefined : window.setTimeout(dismiss, 4600);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      if (timer) window.clearTimeout(timer);
    };
  }, [open, replay, dismiss]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-name"
      className={`no-print fixed inset-0 z-[60] grid place-items-center bg-background paper-glow ${leaving ? "welcome-leaving" : ""}`}
    >
      <div className="flex flex-col items-center px-6 text-center">
        <p className="eyebrow welcome-rise" style={{ "--rise-delay": "0.1s" } as React.CSSProperties}>
          Welcome to my portfolio
        </p>
        <svg viewBox="0 0 112 118" width="132" height="139" aria-hidden="true" className="my-6">
          <defs>
            <g id="welcome-petal">
              <path
                d="M-1-4C-5-9-10-18-10-25Q-10-32-6-30Q-4-34-1-31Q1-35 4-31Q8-33 9-27C11-20 5-9 1-4Z"
                fill="#dfb4b5"
                stroke="#855766"
                strokeWidth=".9"
              />
              <path d="M-1-5Q-5-17-6-27M0-5Q-1-18 0-29M1-6Q6-19 6-25" fill="none" stroke="#946875" strokeWidth=".55" />
            </g>
          </defs>
          <path className="welcome-stem" d="M43 112C44 99 69 78 60 40" fill="none" stroke="#70765e" strokeWidth="1.7" pathLength={1} />
          <g className="welcome-leaves" fill="#bdc1a7" stroke="#737963" strokeWidth=".9">
            <path d="M53 92Q39 87 33 73Q49 76 53 92Z" />
            <path d="M61 72Q72 63 82 62Q75 73 61 74Z" />
            <path d="m36 76 16 14m12-18 15-8" fill="none" />
          </g>
          <g transform="translate(59 39) rotate(12)">
            <g className="welcome-corolla">
              {[0, 92, 181, 271, 46, 138, 224, 317].map((r) => (
                <use key={r} href="#welcome-petal" transform={`rotate(${r})`} />
              ))}
              <circle r="6" fill="#c8a572" stroke="#886c51" strokeWidth=".8" />
            </g>
          </g>
        </svg>
        <h2 id="welcome-name" className="display text-5xl sm:text-6xl welcome-rise">
          {profile.firstName} <em className="text-primary">{profile.rest}</em>
        </h2>
        <p className="mt-3 text-muted-foreground welcome-rise" style={{ "--rise-delay": "2.1s" } as React.CSSProperties}>
          You can call me {profile.nickname}.
        </p>
        <button
          ref={buttonRef}
          type="button"
          onClick={dismiss}
          className="welcome-rise mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-blush"
          style={{ "--rise-delay": "2.3s" } as React.CSSProperties}
        >
          Enter portfolio <ArrowDown className="size-4" />
        </button>
      </div>
    </div>
  );
}
