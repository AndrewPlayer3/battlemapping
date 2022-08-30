import Head from 'next/head';

import dynamic from 'next/dynamic';

import Layout from '../components/Layout'

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <MapWithNoSSR />
    </div>
  );
}
