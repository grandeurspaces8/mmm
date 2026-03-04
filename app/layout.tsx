import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tatweer Misr | مشاريع سكنية فاخرة في مصر',
  description: 'تطوير مصر – شركة رائدة في التطوير العقاري في مصر. مشاريع سكنية فاخرة في القاهرة، الساحل الشمالي، وسيناء.',
  keywords: 'تطوير مصر, مشاريع سكنية, عقارات مصر, IL Monte Galala, Fouka Bay, D-Bay',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Tatweer Misr',
              telephone: '+201008900076',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
