import { ReactNode } from '@tanstack/react-router';
import { SocialLinks } from '../components/social-links';
import { cn } from '../lib/cn';
import { useLinksStore } from '../store/links';
import { useProfileStore } from '../store/profile';

export function MobileView({ className }: { className?: string }) {
  const profileStore = useProfileStore();
  const linksStore = useLinksStore();

  return (
    <section className={cn('grid place-items-center px-12 py-20', className)}>
      <PhoneBorder>
        <figure className="[&>*:nth-child(1)]:rounded-full [&>*:nth-child(1)]:size-14 [&>*:nth-child(1)]:mx-auto text-center">
          {profileStore.image ? (
            <img
              src={profileStore.image}
              className="ring-4 ring-primary object-cover text-xs"
              alt={`Image of ${profileStore.name}`}
            />
          ) : (
            <div className="bg-gray-200" />
          )}

          <figcaption className="mt-5">
            {profileStore.name ? (
              <h2 className="font-semibold text-sm mb-0.5">
                {profileStore.name}
              </h2>
            ) : (
              <div className="rounded-md w-full h-4 bg-gray-200 mb-0.5" />
            )}

            {profileStore.email ? (
              <a
                href={`mailto:${profileStore.email}`}
                className="text-stone-400 text-xs"
              >
                {profileStore.email}
              </a>
            ) : (
              <div className="rounded-md bg-gray-200 w-1/2 h-2 mx-auto mt-2" />
            )}
          </figcaption>
        </figure>

        <ul className="space-y-3 mt-10">
          {linksStore.links?.map((link, i) => (
            <li key={link.url + i}>
              <SocialLinks url={link.url} linkFor={link.platform} />
            </li>
          ))}
        </ul>
      </PhoneBorder>
    </section>
  );
}

function PhoneBorder({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[18rem] w-full border border-stone-300 aspect-[9/16.5] rounded-3xl p-1.5">
      <div className="rounded-[18px] border border-stone-300 w-full h-full p-6 lg:px-7 lg:py-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
