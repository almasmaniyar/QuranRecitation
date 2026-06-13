import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Quran Tajweed & Recitation Checker',
  description:
    'Practice Qaida basics and check your Surah recitation with instant Tajweed feedback.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
