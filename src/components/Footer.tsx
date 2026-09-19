import React from "react";

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-slate-800 text-center">
      <div className="max-w-5xl mx-auto text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Ryan Casalme. Built with Next.js, PostgreSQL, and Godot Engine 4.</p>
      </div>
    </footer>
  );
}
