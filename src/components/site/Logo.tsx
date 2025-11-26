import Link from 'next/link';
import { Citrus } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="bg-primary rounded-full p-2 transition-transform group-hover:scale-110">
        <Citrus className="h-6 w-6 text-primary-foreground" />
      </div>
      <div>
        <div className="font-headline font-bold text-primary text-xl leading-none">
          Raut Wanojekar
        </div>
        <div className="text-xs text-muted-foreground leading-none mt-1">
          FARMER PRODUCER COMPANY
        </div>
      </div>
    </Link>
  );
}
