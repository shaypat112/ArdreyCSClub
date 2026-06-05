"use client";

import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/resources", label: "Resources" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="rounded-lg bg-purple-600 p-2">
            <Code2 className="h-3 w-4" />
          </div>

          <span className="text-lg">
            AK<span className="text-purple-400">CS</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                text-sm text-zinc-300
                transition-colors
                hover:text-purple-400
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/join">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Join Club
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-black">
            <div className="mt-8 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-zinc-300"
                >
                  {link.label}
                </Link>
              ))}

              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Join Club
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
