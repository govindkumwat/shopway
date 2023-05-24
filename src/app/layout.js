import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Shopway',
  description: 'The way you shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
