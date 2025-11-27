
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex items-baseline">
        <div className="font-headline font-bold text-primary text-4xl leading-none">
          RAW
        </div>
      </div>
      <div className="border-l pl-3 ml-2">
        <div className="text-sm text-muted-foreground leading-tight tracking-widest font-sans font-black">
          Raut Wanojekar
        </div>
      </div>
    </Link>
  );
}
