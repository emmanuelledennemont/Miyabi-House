import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const router = useRouter();

  const isActive: boolean = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);

  return (
    <Link href={href} className={clsx(isActive && "text-secondary")}>
      {children}
    </Link>
  );
};
