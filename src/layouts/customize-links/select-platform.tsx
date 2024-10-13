import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import { getSocialIcon } from '../../components/social-links';
import { PLATFORMS } from '../../constants/platforms';

type Platform = Lowercase<(typeof PLATFORMS)[number]>;

export function SelectPlatform({ className }: { className?: string }) {
  const id = useId();
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('github');

  const PlatformIcon = getSocialIcon(selectedPlatform);

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs mb-1.5">
        Platform
      </label>

      <div className="relative mb-3">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <PlatformIcon size={18} className="stroke-stone-600" />
        </div>

        <select
          id={id}
          className="appearance-none w-full h-11 px-4 pl-12 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value as Platform)}
          required
        >
          {PLATFORMS.map((platform) => (
            <option key={platform} value={platform.toLowerCase()}>
              {platform}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <ChevronDown className="size-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
