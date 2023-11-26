import { Inter } from 'next/font/google'
import './globals.css'
import AuthenticationManager from './hooks'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Friends Book',
  description: "Friends Book - Connect with friends, share updates, and discover new connections on our social media platform. Join the community, express yourself, and stay connected with the people who matter most. Sign up today and experience a new way to share moments and memories with Friends Book."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthenticationManager>
          {children}
        </AuthenticationManager>
      </body>
    </html>
  )
}
