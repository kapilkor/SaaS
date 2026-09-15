"use client";

import { useState } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((current) => !current)}
      />

      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="pt-14">
        <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14),_transparent_52%)] px-6">
          <div className="w-full max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Ghost AI
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Workspace editor shell
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              A floating project sidebar and fixed top navigation frame the application
              for the next editor panels and content workflows.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
