import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shijal Sharma Poudel - Portfolio",
  description: "Data Engineer Portfolio - Shijal Sharma Poudel",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body 
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-[#0a0a0a] text-white overflow-x-hidden`}
        style={{
          background: 'radial-gradient(circle at top left, rgba(104, 45, 190, 0.2), transparent), radial-gradient(circle at bottom right, rgba(219, 39, 119, 0.15), transparent)',
          backgroundColor: '#0a0a0a'
        }}
      >
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl transform rotate-12 animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/5 to-transparent rounded-full blur-3xl transform -rotate-12 animate-pulse"></div>
        </div>

        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
