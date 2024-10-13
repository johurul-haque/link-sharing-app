import { ReactNode } from '@tanstack/react-router';
import { SocialLinks } from '../components/social-links';
import { cn } from '../lib/cn';

export function MobileView({ className }: { className?: string }) {
  return (
    <section className={cn('grid place-items-center px-12 py-20', className)}>
      <PhoneBorder>
        <figure className="[&>*:nth-child(1)]:rounded-full [&>*:nth-child(1)]:size-14 [&>*:nth-child(1)]:mx-auto text-center">
          {false ? (
            <div className="bg-gray-200" />
          ) : (
            <img src="/" className="ring-4 ring-primary object-cover" alt="" />
          )}

          <figcaption className="mt-5">
            {true ? (
              <div className="rounded-md w-full h-4 bg-gray-200 mb-0.5" />
            ) : (
              <h2 className="font-semibold text-sm mb-0.5">{'Ben Wright'}</h2>
            )}

            {true ? (
              <div className="rounded-md bg-gray-200 w-1/2 h-2 mx-auto mt-2" />
            ) : (
              <a
                href="mailto:ben@example.com"
                className="text-stone-400 text-xs"
              >
                {'ben@example.com'}
              </a>
            )}
          </figcaption>
        </figure>

        <ul className="space-y-3 mt-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <SocialLinks url="/" linkFor="youtube" label="LinkedIn" />
            </li>
          ))}
        </ul>
      </PhoneBorder>
    </section>
  );
}

function PhoneBorder({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-xs w-full border border-stone-300 aspect-[9/19.5] rounded-3xl p-1.5">
      <div className="rounded-[18px] border border-stone-300 w-full h-full p-6 lg:px-7 lg:py-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
