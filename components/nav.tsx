"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="hidden sm:block text-lg font-semibold transition-colors hover:text-foreground/80"
          aria-label="Home"
        >
          Jay J. Yoon
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

