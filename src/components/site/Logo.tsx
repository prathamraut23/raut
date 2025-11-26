import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="font-headline text-xl font-bold text-primary">
        RAW
      </span>
      <div className="text-xs">
        <div>Raut</div>
        <div>Wanojekar</div>
      </div>
    </Link>
  );
}
