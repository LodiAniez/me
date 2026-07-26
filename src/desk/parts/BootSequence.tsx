import { useBootSequence } from "../hooks/useBootSequence";
import type { BootSequenceProps } from "../types";

export default function BootSequence({ onDone }: BootSequenceProps) {
  const { shownLines, typing, finish } = useBootSequence(onDone);

  return (
    <div className="boot" onClick={finish}>
      {shownLines.map((l, i) => (
        <div key={i} className={i === 0 ? "boot-logo" : undefined}>
          {l || " "}
        </div>
      ))}
      {typing && <span className="cursor-block" />}
      <div className="boot-skip">click to skip →</div>
    </div>
  );
}
