import ZoomOverlay from "../../components/ZoomOverlay";
import { useNotebook } from "../hooks/useNotebook";
import WhatIDoPage from "./WhatIDoPage";
import AboutDiaryPage from "./AboutDiaryPage";
import type { NotebookProps } from "../types";

const PAGES = 2;

// A flip-through diary: page 1 = "What I Do", page 2 = "About Me".
export default function Notebook({ initialPage = 0, onClose }: NotebookProps) {
  const { page, dir, go } = useNotebook(initialPage, PAGES);

  return (
    <ZoomOverlay onClose={onClose}>
      <div className="notebook" onClick={(e) => e.stopPropagation()}>
        <div className="nb-rings" aria-hidden>
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <button className="nb-close" onClick={onClose} aria-label="Close notebook">
          ✕
        </button>

        <div className={`nb-page flip-${dir}`} key={page}>
          {page === 0 ? <WhatIDoPage /> : <AboutDiaryPage />}
        </div>

        <div className="nb-nav">
          <button className="nb-turn" onClick={() => go(-1)} disabled={page === 0}>
            ‹ prev
          </button>
          <div className="nb-dots" aria-hidden>
            {Array.from({ length: PAGES }).map((_, i) => (
              <span key={i} className={`nb-dot${i === page ? " on" : ""}`} />
            ))}
          </div>
          <button className="nb-turn" onClick={() => go(1)} disabled={page === PAGES - 1}>
            next ›
          </button>
        </div>
      </div>
    </ZoomOverlay>
  );
}
