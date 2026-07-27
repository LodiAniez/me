import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { WinState } from "../types";

// On phones the CRT screen is too narrow for cascaded, partially-offscreen
// windows, so new windows open maximized and flush to the top-left.
const isSmallScreen = () =>
  typeof window !== "undefined" && window.innerWidth <= 560;

interface OSState {
  windows: WinState[];
  topZ: number;
  openedCount: number;
}

type Action =
  | { type: "open"; id: string }
  | { type: "close"; id: string }
  | { type: "focus"; id: string }
  | { type: "minimize"; id: string }
  | { type: "maximize"; id: string }
  | { type: "toggle"; id: string }
  | { type: "move"; id: string; x: number; y: number };

function reducer(state: OSState, action: Action): OSState {
  switch (action.type) {
    case "open": {
      const existing = state.windows.find((w) => w.id === action.id);
      const z = state.topZ + 1;
      if (existing) {
        return {
          ...state,
          topZ: z,
          windows: state.windows.map((w) =>
            w.id === action.id ? { ...w, minimized: false, z } : w
          ),
        };
      }
      const small = isSmallScreen();
      const offset = (state.openedCount % 6) * 22;
      return {
        ...state,
        topZ: z,
        openedCount: state.openedCount + 1,
        windows: [
          ...state.windows,
          {
            id: action.id,
            z,
            minimized: false,
            maximized: small,
            x: small ? 6 : 24 + offset,
            y: small ? 6 : 18 + offset,
          },
        ],
      };
    }
    case "close":
      return { ...state, windows: state.windows.filter((w) => w.id !== action.id) };
    case "focus": {
      const z = state.topZ + 1;
      return {
        ...state,
        topZ: z,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, z, minimized: false } : w
        ),
      };
    }
    case "minimize":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, minimized: true } : w
        ),
      };
    case "maximize": {
      const z = state.topZ + 1;
      return {
        ...state,
        topZ: z,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, maximized: !w.maximized, z } : w
        ),
      };
    }
    case "toggle": {
      const win = state.windows.find((w) => w.id === action.id);
      if (!win) return state;
      const z = state.topZ + 1;
      if (win.minimized) {
        return {
          ...state,
          topZ: z,
          windows: state.windows.map((w) =>
            w.id === action.id ? { ...w, minimized: false, z } : w
          ),
        };
      }
      // Top window → minimize; otherwise raise it.
      if (win.z === state.topZ) {
        return {
          ...state,
          windows: state.windows.map((w) =>
            w.id === action.id ? { ...w, minimized: true } : w
          ),
        };
      }
      return {
        ...state,
        topZ: z,
        windows: state.windows.map((w) => (w.id === action.id ? { ...w, z } : w)),
      };
    }
    case "move":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, x: action.x, y: action.y } : w
        ),
      };
  }
}

interface OSContextValue {
  windows: WinState[];
  topZ: number;
  open: (id: string) => void;
  close: (id: string) => void;
  focus: (id: string) => void;
  minimize: (id: string) => void;
  maximize: (id: string) => void;
  toggle: (id: string) => void;
  move: (id: string, x: number, y: number) => void;
}

const OSContext = createContext<OSContextValue | null>(null);

export function OSProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    windows: [],
    topZ: 10,
    openedCount: 0,
  });

  const value = useMemo<OSContextValue>(
    () => ({
      windows: state.windows,
      topZ: state.topZ,
      open: (id) => dispatch({ type: "open", id }),
      close: (id) => dispatch({ type: "close", id }),
      focus: (id) => dispatch({ type: "focus", id }),
      minimize: (id) => dispatch({ type: "minimize", id }),
      maximize: (id) => dispatch({ type: "maximize", id }),
      toggle: (id) => dispatch({ type: "toggle", id }),
      move: (id, x, y) => dispatch({ type: "move", id, x, y }),
    }),
    [state.windows, state.topZ]
  );

  return <OSContext.Provider value={value}>{children}</OSContext.Provider>;
}

export function useOS() {
  const ctx = useContext(OSContext);
  if (!ctx) throw new Error("useOS must be used within OSProvider");
  return ctx;
}
