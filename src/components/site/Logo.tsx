import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl" role="img" aria-label="Orange">
        🍊
      </span>
      <span className="font-headline text-xl font-bold text-primary">
        Raut Orange Ecosystem
      </span>
    </Link>
  );
}
