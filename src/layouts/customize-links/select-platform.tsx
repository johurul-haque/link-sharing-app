import { ChevronDown } from 'lucide-react';
import { forwardRef, SelectHTMLAttributes } from 'react';
import { getSocialIcon } from '../../components/social-links';
import { PLATFORMS } from '../../constants/platforms';
import { cn } from '../../lib/cn';


export const SelectPlatform = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, onChange, value, name, ...props }, ref) => {
  const PlatformIcon = value ? getSocialIcon(value as string) : null;

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-xs mb-1.5">
        Platform
      </label>

      <div className="relative mb-3">
        {PlatformIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <PlatformIcon size={18} className="stroke-stone-600" />
          </div>
        )}

        <select
          ref={ref}
          id={name}
          name={name}
          className={cn(
            'appearance-none w-full h-11 px-4 pl-12 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm',
            {
              'pl-4': !value,
            }
          )}
          value={value}
          onChange={onChange}
          required
          {...props}
        >
          <option value="" hidden>
            Select platform
          </option>
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
});
