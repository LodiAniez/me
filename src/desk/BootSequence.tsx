import { useEffect, useRef, useState } from "react";

const LINES = [
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

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    onDone();
  };

  useEffect(() => {
    if (count >= LINES.length) {
      const t = setTimeout(finish, 650);
      return () => clearTimeout(t);
    }
    const delay = LINES[count] === "" ? 90 : 150;
    const t = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="boot" onClick={finish}>
      {LINES.slice(0, count).map((l, i) => (
        <div key={i} className={i === 0 ? "boot-logo" : undefined}>
          {l || " "}
        </div>
      ))}
      {count < LINES.length && <span className="cursor-block" />}
      <div className="boot-skip">click to skip →</div>
    </div>
  );
}
