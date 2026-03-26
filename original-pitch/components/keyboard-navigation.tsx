
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function KeyboardNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const currentPath = window.location.pathname;
      const total = searchParams?.get('total') || '2';

      if (currentPath.startsWith('/pages/')) {
        const currentPage = parseInt(currentPath.split('/')[2] || '1');

        if (event.key === 'ArrowRight' && currentPage < parseInt(total)) {
          router.push(`/pages/${currentPage + 1}?total=${total}`);
        } else if (event.key === 'ArrowLeft' && currentPage > 1) {
          router.push(`/pages/${currentPage - 1}?total=${total}`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router, searchParams]);

  return null;
}
