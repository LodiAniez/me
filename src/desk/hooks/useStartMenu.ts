import { useEffect, useState } from "react";

// Start-menu open state that closes on any outside pointer-down.
export function useStartMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("pointerdown", close);
    return () => window.removeEventListener("pointerdown", close);
  }, [open]);
  return { open, setOpen };
}
