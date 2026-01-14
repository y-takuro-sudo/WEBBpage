import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WEBB Inc. | Film / Photo / Design',
  description:
    'WEBB Inc. is a creative production company specializing in film, photography, and design. Based in Tokyo, Japan.',
  keywords: ['WEBB', 'Film', 'Photography', 'Design', 'Tokyo', 'Creative', 'Production'],
  authors: [{ name: 'Kazuyasu Yoshioka' }],
  openGraph: {
    title: 'WEBB Inc.',
    description: 'Film / Photo / Design',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
