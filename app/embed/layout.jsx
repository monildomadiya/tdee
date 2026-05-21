export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function EmbedLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent' }}>
      {children}
    </div>
  );
}
