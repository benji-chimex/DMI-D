import './globals.css'

export const metadata = {
  title: 'Med-Share',
  description: 'A Web5 App which allow users to share their medical records with their doctors using DIDs and DWNs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}