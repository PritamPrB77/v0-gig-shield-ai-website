'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/live', label: 'Live Feed' },
    { href: '/insurer', label: 'Insurer' },
    { href: '/about', label: 'About' },
    { href: '/api-docs', label: 'API' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition">
              G
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">GigShield</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-foreground">
              Login
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Get Protected
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background-secondary/50 backdrop-blur">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-foreground/80 hover:text-primary transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border pt-3 space-y-2">
                <Button variant="outline" className="w-full" size="sm">
                  Login
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Get Protected
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
