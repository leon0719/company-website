// 服務器組件，不使用 'use client'

import ClientWrapper from '../components/ClientWrapper';

export default function Home() {
  return (
    <main>
      <ClientWrapper />
    </main>
  );
}