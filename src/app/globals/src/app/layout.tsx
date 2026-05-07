import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blue Icee',
  description: 'Cute icy social arcade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
