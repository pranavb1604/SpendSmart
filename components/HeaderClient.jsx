"use client";

import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const HeaderClient = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border transition-colors">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logofin.png"
            alt="SpendSmart Logo"
            width={200}
            height={60}
            className="h-16 sm:h-20 md:h-24 w-auto object-contain -my-2"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
          </SignedOut>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <SignedIn>
            <Link href="/dashboard">
              <Button>
                <LayoutDashboard size={18} />
                <span className="ml-2">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button>
                <PenBox size={18} />
                <span className="ml-2">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: { avatarBox: "w-10 h-10" },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default HeaderClient;
