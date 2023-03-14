import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getPWADisplayMode } from '../libs/getPWADisplayMode';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isPWA, setIsPWA] = useState(false);
  useEffect(() => {
    const browserMode = getPWADisplayMode();

    if (browserMode === 'standalone') {
      setIsPWA(true);
    }
  }, []);
  return (
    <div>
      {isPWA && <h1>IN PWA WOOOO</h1>}
      <a href="https://nextjs-pwa-example-test-app.vercel.app">
        This is external, let me redirect you to original source
      </a>
    </div>
  );
}
