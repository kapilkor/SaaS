"use client"

import { Button } from "@/components/ui/button"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-14 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="flex h-full w-full items-center justify-between px-3">
        <div className="flex w-1/3 items-center justify-start">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            onClick={onToggleSidebar}
            className="text-muted-foreground hover:text-foreground"
          >
            {isSidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex w-1/3 items-center justify-center">
          <span className="text-sm font-medium text-foreground/80">Workspace</span>
        </div>

        <div className="w-1/3" aria-hidden="true" />
      </div>
    </header>
  )
}
