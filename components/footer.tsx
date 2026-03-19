'use client';

import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="text-white font-bold">GigShield AI</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Protecting India's gig workers with AI-powered parametric insurance.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#features" className="hover:text-primary transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-primary transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/live" className="hover:text-primary transition">
                  Live Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="hover:text-primary transition">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  IRDAI Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-foreground/60 mb-4 md:mb-0">
            <p>
              © 2026 GigShield AI. Powered by{' '}
              <Link href="#" className="text-primary hover:underline">
                Guidewire
              </Link>
              . Licensed under IRDAI Sandbox.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-foreground/60 hover:text-primary transition"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-primary transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
