import { useState } from "react";
import { useOS } from "./useOSStore";
import type { Phase } from "../types";

// Top-level desk state: CRT power phase + which zoom overlay (if any) is open.
export function useDeskScene() {
  const { open } = useOS();
  const [phase, setPhase] = useState<Phase>("boot");
  const [notebookPage, setNotebookPage] = useState<number | null>(null);
  const [stickyOpen, setStickyOpen] = useState(false);

  const openApp = (id: string) => {
    if (phase !== "on") setPhase("on");
    open(id);
  };

  const bootDone = () => {
    setPhase("on");
    open("readme");
  };

  return {
    phase,
    setPhase,
    notebookPage,
    setNotebookPage,
    stickyOpen,
    setStickyOpen,
    openApp,
    bootDone,
  };
}
