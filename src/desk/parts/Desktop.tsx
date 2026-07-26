import { useOS } from "../hooks/useOSStore";
import { REGISTRY } from "./windows/registry";
import DesktopIcons from "./DesktopIcons";
import Window from "./Window";
import Taskbar from "./Taskbar";
import type { DesktopProps } from "../types";

export default function Desktop({ onShutDown }: DesktopProps) {
  const { windows, topZ } = useOS();

  return (
    <div className="desktop">
      <DesktopIcons />

      {windows.map((w) => {
        const meta = REGISTRY[w.id];
        if (!meta || w.minimized) return null;
        const Body = meta.Component;
        return (
          <Window
            key={w.id}
            id={w.id}
            title={meta.title}
            icon={meta.icon}
            z={w.z}
            x={w.x}
            y={w.y}
            active={w.z === topZ}
            width={meta.width}
            height={meta.height}
            menubar={meta.menubar}
          >
            <Body />
          </Window>
        );
      })}

      <Taskbar onShutDown={onShutDown} />
    </div>
  );
}
