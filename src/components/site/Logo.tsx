import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div>
        <div className="font-headline font-bold text-primary text-4xl leading-none">
          RAW
        </div>
        <div className="text-sm text-muted-foreground leading-none mt-1 tracking-widest font-cursive">
          Raut Wanojekar
        </div>
      </div>
    </Link>
  );
}
