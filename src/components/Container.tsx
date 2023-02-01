import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from './Header';
import Navigation from './Navigation';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Header customMeta={customMeta} />
      <Navigation mounted={mounted} />    
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
