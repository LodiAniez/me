import { useEffect, useState } from "react";

// Page-flip navigation for the diary notebook. (Escape is handled by the
// ZoomOverlay; here we add left/right arrow flipping.)
export function useNotebook(initialPage: number, pageCount: number) {
  const [page, setPage] = useState(initialPage);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const go = (delta: number) => {
    setPage((p) => {
      const next = Math.max(0, Math.min(pageCount - 1, p + delta));
      if (next !== p) setDir(delta > 0 ? "next" : "prev");
      return next;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  return { page, dir, go };
}
