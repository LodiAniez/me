import type { CSSProperties, FC, ReactNode } from "react";

/* ---------------- OS / window manager ---------------- */
export type Phase = "boot" | "on" | "off";

export interface WinState {
  id: string;
  z: number;
  minimized: boolean;
  maximized: boolean;
  x: number;
  y: number;
}

export interface WinMeta {
  title: string;
  icon: string;
  width: number;
  height: number;
  menubar?: boolean;
  Component: FC;
}

export interface MenuItem {
  id: string;
  label: string;
}

/* ---------------- Domain data ---------------- */
export interface Project {
  title: string;
  category: string;
  image: string;
  filename: string;
}

export interface AchievementImage {
  src: string;
  caption: string;
}

export interface Achievement {
  title: string;
  event: string;
  icon: string;
  description?: string;
  app?: string;
  appDescription?: string;
  role?: string;
  video?: string;
  images?: AchievementImage[];
}

/* ---------------- Component props ---------------- */
export interface PropProps {
  className?: string;
  style: CSSProperties;
  tip: string;
  label: string;
  onOpen: () => void;
  children: ReactNode;
}

export interface WindowProps {
  id: string;
  title: string;
  icon: string;
  z: number;
  x: number;
  y: number;
  active: boolean;
  maximized: boolean;
  width: number;
  height: number;
  menubar?: boolean;
  statusbar?: ReactNode;
  children: ReactNode;
}

export interface MonitorProps {
  phase: Phase;
  setPhase: (p: Phase) => void;
  onBootDone: () => void;
}

export interface DeskPropsProps {
  onOpenApp: (id: string) => void;
  onOpenNotebook: (page: number) => void;
  onOpenSticky: () => void;
}

export interface DesktopProps {
  onShutDown: () => void;
}

export interface StartMenuProps {
  onSelect: (id: string) => void;
  onShutDown: () => void;
}

export interface NotebookProps {
  initialPage?: number;
  onClose: () => void;
}

export interface BootSequenceProps {
  onDone: () => void;
}

export interface CloseProps {
  onClose: () => void;
}
