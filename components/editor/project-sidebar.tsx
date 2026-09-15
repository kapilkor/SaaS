"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Plus, X } from "lucide-react"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-44 items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 px-4 text-center text-sm text-muted-foreground">
      {label}
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-y-0 left-0 z-30 flex transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <aside
        className={cn(
          "pointer-events-auto flex h-full w-80 flex-col border-r border-border bg-sidebar/95 text-sidebar-foreground shadow-2xl backdrop-blur-sm transition-transform duration-200 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-base font-semibold">Projects</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Close project sidebar"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-3">
          <Tabs defaultValue="my-projects" className="flex min-h-0 flex-1 flex-col">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects" className="mt-4 flex-1">
              <EmptyState label="No personal projects yet" />
            </TabsContent>

            <TabsContent value="shared" className="mt-4 flex-1">
              <EmptyState label="No shared projects yet" />
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-border p-3">
          <Button type="button" className="w-full justify-center gap-2" size="lg">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>
    </div>
  )
}
