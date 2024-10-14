import {
  ArrowRight,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'lucide-react';
import { PLATFORMS } from '../constants/platforms';
import { cn } from '../lib/cn';

type PropsType = {
  url: string;
  linkFor: string;
};

export function SocialLinks({ url, linkFor }: PropsType) {
  const Icon = getSocialIcon(linkFor);
  const label = getSocialLabel(linkFor);

  return (
    <a
      href={url}
      target="_blank"
      className={cn(
        'rounded-md px-4 py-3 text-white text-xs flex items-center justify-between gap-2',
        {
          'bg-neutral-900': linkFor === 'github',
          'bg-red-500': linkFor === 'youtube',
          'bg-blue-600 items-end': linkFor === 'linkedin',
        }
      )}
    >
      {Icon && <Icon strokeWidth={1.5} size={20} />}
      <span className="mr-auto">{label}</span>
      <ArrowRight strokeWidth={1.7} size={20} />
    </a>
  );
}

export function getSocialIcon(iconFor: string) {
  switch (iconFor) {
    case 'github':
      return GithubIcon;
    case 'youtube':
      return YoutubeIcon;
    case 'linkedin':
      return LinkedinIcon;
  }
}

function getSocialLabel(value: string) {
  return PLATFORMS.filter((platform) => platform.toLowerCase() === value)[0];
}