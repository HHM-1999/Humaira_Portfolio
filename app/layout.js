
import 'bootstrap/dist/css/bootstrap.min.css'
import BackToTop from './custom/BackToTop'
import './globals.css'

export const metadata = {
  title: 'Humaira Hossain Methela - React & Next.js Developer',
  description: 'Professional React & Next.js Developer Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"/>
      </head>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
