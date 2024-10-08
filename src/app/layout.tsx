import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const inter = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book Mania',
  description: 'personal Book reading application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}