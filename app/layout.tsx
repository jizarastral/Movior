import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Movior Transport LLC | Heavy Equipment & Logistics Across the UAE',
  description:
    'Movior Transport LLC delivers reliable heavy equipment transport, low-bed trailer services, project cargo and specialized logistics solutions across the United Arab Emirates. Driving Reliability. Delivering Excellence.',
  keywords: [
    'Movior Transport',
    'heavy equipment transport UAE',
    'low bed trailer Abu Dhabi',
    'project cargo logistics UAE',
    'flatbed trailer transport',
    'Abu Dhabi transport company',
  ],
  // Cache-bust query so browsers drop the old Vercel favicon after deploy
  icons: {
    icon: [
      { url: '/favicon.ico?v=movior2', sizes: '48x48' },
      { url: '/icon.svg?v=movior2', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png?v=movior2', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png?v=movior2', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=movior2',
    apple: [{ url: '/apple-icon.png?v=movior2', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e2531f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
