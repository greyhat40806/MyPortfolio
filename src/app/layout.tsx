import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Casalme | Game Designer & Game Developer Portfolio",
  description:
    "Designing gameplay systems, mechanics, and interactive experiences through hands-on game development. Specializing in Godot Engine 4 (C#), technical GDDs, and disaster response simulation.",
  keywords: [
    "Ryan Casalme",
    "Game Designer",
    "Game Developer",
    "Godot Engine 4",
    "C#",
    "Disaster Response Simulation",
    "Huling Linya",
    "Junior Game Designer",
    "Gameplay Systems",
    "GDD",
    "Roblox Studio"
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
