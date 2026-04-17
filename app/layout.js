
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Burned&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
