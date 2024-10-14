import { Link } from '@tanstack/react-router';
import { CircleUserRound, LinkIcon } from 'lucide-react';
import { Logo } from './logo';

const LINKS = [
  { to: '/', label: 'Links', Icon: LinkIcon },
  { to: '/profile', label: 'Profile Details', Icon: CircleUserRound },
];

export function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-4 mx-auto bg-white rounded-lg my-6 w-full">
      <Link to="/">
        <Logo />
      </Link>

      <nav>
        <ul className="flex gap-2">
          {LINKS.map(({ to, label, Icon }) => (
            <li key={to}>
              <Link
                className="[&.active]:bg-secondary [&.active]:text-primary hover:bg-gray-100 font-medium px-4 py-2 flex gap-2 items-center rounded-md"
                to={to}
              >
                <Icon size={18} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        className="px-5 py-2 rounded-md border-2 border-primary text-primary font-semibold hover:bg-secondary"
        to="/preview"
      >
        Preview
      </Link>
    </header>
  );
}
