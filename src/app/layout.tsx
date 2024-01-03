import { auth } from '@/auth'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth Tutorial',
  description: 'Learn next auth v5 tutorial by Code with Antonio.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <Toaster />
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProvider>
  )
}
