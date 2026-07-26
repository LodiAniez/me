import type { PropProps } from "../types";

// A clickable desk prop (sticky note, floppy, sketchbook…).
export default function Prop({ className, style, tip, label, onOpen, children }: PropProps) {
  return (
    <div
      className={`prop ${className ?? ""}`}
      style={style}
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
    >
      <span className="tip">{tip}</span>
      {children}
    </div>
  );
}
