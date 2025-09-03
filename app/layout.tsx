import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "ready4.love - Become the One",
  description:
    "Preparándote para relaciones saludables a través del crecimiento personal y la salud mental. In order to find the one you must become the one.",
  generator: "v0.app",
  keywords: ["salud mental", "relaciones saludables", "crecimiento personal", "amor propio", "desarrollo personal"],
  authors: [{ name: "ready4.love" }],
  openGraph: {
    title: "ready4.love - Become the One",
    description: "Preparándote para relaciones saludables a través del crecimiento personal y la salud mental.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
