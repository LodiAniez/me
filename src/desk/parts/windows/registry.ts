import type { WinMeta } from "../../types";
import ReadmeWindow from "./ReadmeWindow";
import AboutWindow from "./AboutWindow";
import MyComputerWindow from "./MyComputerWindow";
import ServicesWindow from "./ServicesWindow";
import ResumeWindow from "./ResumeWindow";
import ProjectsWindow from "./ProjectsWindow";
import GuestbookWindow from "./GuestbookWindow";
import AchievementsWindow from "./AchievementsWindow";
import ContactWindow from "./ContactWindow";
import AppsWindow from "./AppsWindow";

export const REGISTRY: Record<string, WinMeta> = {
  readme: { title: "readme.txt - Notepad", icon: "📝", width: 420, height: 320, Component: ReadmeWindow },
  about: { title: "About Me", icon: "👤", width: 460, height: 400, Component: AboutWindow },
  mycomputer: { title: "My Computer", icon: "🖥️", width: 360, height: 320, Component: MyComputerWindow },
  services: { title: "What I Do", icon: "🛠️", width: 440, height: 400, Component: ServicesWindow },
  resume: { title: "resume.doc - WordPad", icon: "📜", width: 480, height: 460, Component: ResumeWindow },
  projects: { title: "Projects", icon: "📁", width: 500, height: 420, Component: ProjectsWindow },
  guestbook: { title: "Guestbook", icon: "📖", width: 460, height: 420, Component: GuestbookWindow },
  achievements: { title: "Achievements", icon: "🏆", width: 480, height: 470, Component: AchievementsWindow },
  apps: { title: "My Apps — Downloads", icon: "💾", width: 500, height: 440, Component: AppsWindow },
  contact: { title: "New Message", icon: "✉️", width: 460, height: 430, Component: ContactWindow },
};
