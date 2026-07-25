import { useEffect } from "react";
import About from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import PortfolioGallery from "../components/PortfolioGallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { SECTIONS, type SectionId } from "./sections";

const CONTENT: Record<SectionId, React.FC> = {
  about: About,
  services: Services,
  resume: Resume,
  portfolio: PortfolioGallery,
  testimonials: Testimonials,
  contact: Contact,
};

export default function SectionModal({
  id,
  onClose,
}: {
  id: SectionId;
  onClose: () => void;
}) {
  const Body = CONTENT[id];
  const meta = SECTIONS.find((s) => s.id === id)!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-2 sm:p-6"
      style={{ background: "rgba(3, 8, 18, 0.72)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-2xl border border-gray-700 shadow-2xl"
        style={{ background: "#111827" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{meta.emoji}</span>
            <div>
              <div className="text-white font-bold leading-tight">{meta.title}</div>
              <div className="text-xs" style={{ color: meta.color }}>
                {meta.tagline}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2 text-sm font-medium transition-colors"
          >
            Back to world
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        <Body />
      </div>
    </div>
  );
}
