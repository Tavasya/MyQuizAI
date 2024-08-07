import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/ui/header";

import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyQuizzAi',
  description: 'Create personally curated quizzes with AI!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={"dark"}>
          <Header />
            {children}
          </body>
      </SessionProvider>
    </html>
  )
}
