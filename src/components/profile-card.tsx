import { ReactNode } from '@tanstack/react-router';
import { cn } from '../lib/cn';
import { useLinksStore } from '../store/links';
import { useProfileStore } from '../store/profile';
import { SocialLinks } from './social-links';

export function ProfileCard({ previewMode }: { previewMode?: boolean }) {
  const profileStore = useProfileStore();
  const linksStore = useLinksStore();

  return (
    <>
      <figure
        className={cn(
          '[&>*:nth-child(1)]:rounded-full [&>*:nth-child(1)]:size-14 [&>*:nth-child(1)]:mx-auto text-center',
          previewMode && '[&>*:nth-child(1)]:size-20'
        )}
      >
        {profileStore.image ? (
          <img
            src={profileStore.image}
            className="ring-4 ring-primary object-cover text-xs"
            alt={`Image of ${profileStore.name}`}
          />
        ) : (
          <div className={'bg-gray-200'} />
        )}

        <figcaption className="mt-5">
          {profileStore.name ? (
            <Title previewMode={previewMode}>{profileStore.name}</Title>
          ) : (
            <div className="rounded-md w-full h-4 bg-gray-200 mb-0.5" />
          )}

          {profileStore.email ? (
            <a
              href={`mailto:${profileStore.email}`}
              className="text-stone-400 text-xs hover:underline"
            >
              {profileStore.email}
            </a>
          ) : (
            <div
              className="rounded-md bg-gray-200 w-1/2 h-2 mx-auto mt-2"
              hidden={previewMode}
            />
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
    </>
  );
}

function Title({
  previewMode,
  children,
}: {
  previewMode?: boolean;
  children: ReactNode;
}) {
  return previewMode ? (
    <h1 className="mb-0.5 text-xl font-bold">{children}</h1>
  ) : (
    <h2 className="font-semibold text-sm mb-0.5">{children}</h2>
  );
}
