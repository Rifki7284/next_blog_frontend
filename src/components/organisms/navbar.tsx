"use client";
import { SITE_CONFIG } from "@/constant/app";
import { MAIN_NAV_LINKS, ROUTES } from "@/constant/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu, X, Home, FileText, Info, Mail, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";

// Map href ke icon yang sesuai
const NAV_ICONS: Record<string, LucideIcon> = {
  "/": Home,
  "/article": FileText,
  "/about": Info,
  "/contact": Mail,
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
              <span className="text-primary-foreground font-bold text-sm">
                B
              </span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
                title={link.description}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="block md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu
                    className={`absolute transition-all duration-300 ${
                      open
                        ? "opacity-0 rotate-90 scale-50"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`absolute transition-all duration-300 ${
                      open
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-50"
                    }`}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>My Blog</SheetTitle>
                </SheetHeader>
                <div className="px-6 flex flex-col gap-1 mt-2">
                  {MAIN_NAV_LINKS.map((link) => {
                    const Icon = NAV_ICONS[link.href] ?? FileText;
                    return (
                      <div key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 py-3 text-sm text-foreground hover:text-primary transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-medium">{link.label}</span>
                            <span className="text-xs text-muted-foreground">
                              {link.description}
                            </span>
                          </div>
                        </Link>
                        <Separator />
                      </div>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
