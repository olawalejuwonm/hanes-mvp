import { Suspense } from 'react';
import IconDetail from '@/views/IconDetail';

export default function IconDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#D4A843]/20 border-t-[#D4A843] rounded-full animate-spin" />
      </div>
    }>
      <IconDetail />
    </Suspense>
  );
}
