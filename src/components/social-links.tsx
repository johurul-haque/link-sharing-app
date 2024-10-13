import {
  ArrowRight,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'lucide-react';
import { cn } from '../lib/cn';

type PropsType = {
  url: string;
  label: string;
  linkFor: 'github' | 'youtube' | 'linkedin';
};

export function SocialLinks({ url, linkFor, label }: PropsType) {
  const Icon = getSocialIcon(linkFor);

  return (
    <a
      href={url}
      className={cn(
        'rounded-md px-4 py-3 text-white text-xs flex items-center justify-between gap-2',
        {
          'bg-neutral-900': linkFor === 'github',
          'bg-red-500': linkFor === 'youtube',
          'bg-blue-600 items-end': linkFor === 'linkedin',
        }
      )}
    >
      <Icon strokeWidth={1.5} size={20} />
      <span className="mr-auto">{label}</span>
      <ArrowRight strokeWidth={1.7} size={20} />
    </a>
  );
}

function getSocialIcon(iconFor: PropsType['linkFor']) {
  switch (iconFor) {
    case 'github':
      return GithubIcon;
    case 'youtube':
      return YoutubeIcon;
    case 'linkedin':
      return LinkedinIcon;
  }
}
