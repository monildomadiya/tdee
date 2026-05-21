'use client'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ToolPageHeader from './ToolPageHeader'
import RelatedCalculatorsFooter from './RelatedCalculatorsFooter'
import CookieBanner from './CookieBanner'

export default function ClientWrapper({ children }) {
  const pathname = usePathname()
  
  // If we are in the Admin panel or Embed route, do NOT render the main website's Header or Footer!
  if (pathname && (pathname.startsWith('/admin') || pathname.startsWith('/embed'))) {
    const isEmbed = pathname.startsWith('/embed');
    return (
      <main className={isEmbed ? 'is-embed' : ''} style={{ flex: 1, minHeight: '100vh', background: isEmbed ? 'transparent' : '#f8fafc' }}>
        {children}
      </main>
    )
  }

  // Otherwise, render the normal website layout
  return (
    <>
      <ScrollToTop />
      <Header />
      <ToolPageHeader />
      <main id="main-content" style={{ outline: 'none', flex: 1 }}>
        {children}
      </main>
      <RelatedCalculatorsFooter />
      <Footer />
      <CookieBanner />
    </>
  )
}
