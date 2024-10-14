import { LinkIcon } from 'lucide-react';

export function Logo() {
  return (
    <div className="font-bold text-lg flex items-center gap-2">
      <div className="bg-primary px-1 py-0.5 rounded-md max-w-fit">
        <LinkIcon className="stroke-white rotate-45" size={17} />
      </div>
      <span className="max-sm:sr-only">devlinks</span>
    </div>
  );
}
