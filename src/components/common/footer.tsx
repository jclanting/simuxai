'use client'
import { Mail } from 'lucide-react'
import Link from 'next/link'

import Typography from '@components/ui/typography'

export function Footer() {
  return (
    <footer
      className="flex flex-col items-center w-full border-t bg-black
        text-white py-8"
    >
      <div
        className="w-full max-w-[1280px] md:px-8 px-4 flex flex-col
          items-center md:items-start gap-8"
      >
        {/* Logo and Contact Section */}
        <div className="flex items-center gap-3">
          <img
            src="/header-logo.png"
            alt="Logo"
            className="h-8"
          />
          <Typography className="text-sm text-gray-400">
            <span className="flex items-center">
              <Mail className="mr-2 h-4" />
              support@simuxai.com
            </span>
          </Typography>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-8 text-center md:text-left">
          <div>
            <Typography
              variant="p"
              className="text-white font-semibold mb-2"
            >
              Terms
            </Typography>
            <Link
              href="/terms-of-service"
              className="block text-sm text-gray-400"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="block text-sm text-gray-400"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            <Typography
              variant="p"
              className="text-white font-semibold mb-2"
            >
              Support & Help
            </Typography>
            <Link
              href="https://support.pandem.com"
              target="_blank"
              className="block text-sm text-gray-400"
            >
              Open Support Ticket
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="w-full max-w-[1280px] md:px-8 px-4 mt-8 text-center border-t
          border-gray-700 pt-4 text-xs text-gray-500"
      >
        © SimuXAI 2024, ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}
