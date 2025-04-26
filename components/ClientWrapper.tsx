'use client';

import dynamic from 'next/dynamic';

// 在客戶端組件中使用 ssr: false
const ScrollAnimations = dynamic(
  () => import('./ScrollAnimations'),
  { ssr: false }
);

export default function ClientWrapper() {
  return <ScrollAnimations />;
}