import { EqualIcon, LinkIcon } from 'lucide-react';
import { SelectPlatform } from './select-platform';

const LINKS = [
  { platform: 'GitHub', url: 'https://github.com/' },
  { platform: 'YouTube', url: 'https://youtube.com/' },
];

export function Form() {
  return (
    <form className="pb-8">
      <div className="px-6 pb-6 space-y-5">
        {LINKS.map((_, i) => (
          <fieldset key={i} className="rounded-lg p-5 bg-gray-100">
            <div className="flex justify-between mb-4">
              <legend className="font-semibold text-stone-600 flex items-center gap-1.5">
                <button>
                  <span className="sr-only">Drag to reposition</span>
                  <EqualIcon size={18} />
                </button>
                Link #{i + 1}
              </legend>
              <button
                type="button"
                className="text-stone-400 hover:text-stone-600 font-medium text-sm"
              >
                Remove
              </button>
            </div>

            <SelectPlatform className="mb-3" />

            <label htmlFor={`url-${i}`} className="block text-xs mb-1.5">
              Link
            </label>
            <div className="h-11 flex items-center border border-stone-200 rounded-md overflow-hidden pl-4 focus-within:ring-2 ring-primary bg-white text-sm">
              <LinkIcon size={18} className="stroke-stone-600" />

              <input
                type="url"
                name=""
                id={`url-${i}`}
                className="grow h-full bg-transparent outline-none pl-4"
                required
              />
            </div>
          </fieldset>
        ))}
      </div>

      <hr />

      <button className="bg-primary text-white px-6 py-2.5 rounded-md font-medium mt-6 mr-6 ml-auto block hover:opacity-90">
        Save
      </button>
    </form>
  );
}
