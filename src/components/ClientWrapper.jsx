'use client'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function ClientWrapper({ children }) {
  const pathname = usePathname()
  
  // If we are in the Admin panel, do NOT render the main website's Header or Footer!
  if (pathname && pathname.startsWith('/admin')) {
    return (
      <main style={{ flex: 1, minHeight: '100vh', background: '#f8fafc' }}>
        {children}
      </main>
    )
  }

  // Otherwise, render the normal website layout
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content" style={{ outline: 'none', flex: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
