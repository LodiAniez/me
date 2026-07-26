import { useEffect, useRef, useState } from "react";

export const BOOT_LINES = [
  "DexterOS BIOS v9.5  (C) 1998 Aniez Systems",
  "",
  "Detecting CPU ... Fullstack Engine  [OK]",
  "Memory Test : 7+ years experience .... OK",
  "Detecting drives ...",
  "  A:  RESUME.DSK        [ready]",
  "  B:  PROJECTS.DSK      [ready]",
  "  C:  DEXTER  (95%)     [ready]",
  "",
  "Loading React ................ done",
  "Loading Node.js .............. done",
  "Loading coffee ☕ ............ done",
  "",
  "Starting DexterOS 95 ...",
];

// Reveals BIOS lines one by one, then signals completion. `finish` skips ahead.
export function useBootSequence(onDone: () => void) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    onDone();
  };

  useEffect(() => {
    if (count >= BOOT_LINES.length) {
      const t = setTimeout(finish, 650);
      return () => clearTimeout(t);
    }
    const delay = BOOT_LINES[count] === "" ? 90 : 150;
    const t = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return {
    shownLines: BOOT_LINES.slice(0, count),
    typing: count < BOOT_LINES.length,
    finish,
  };
}
