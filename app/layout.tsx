import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sanqui Portfolio',
  description: 'Digital Portfolio to show my projects to the world',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
