import { ProfileCard } from '../components/profile-card';
import { cn } from '../lib/cn';

export function MobileView({ className }: { className?: string }) {
  return (
    <section className={cn('grid place-items-center px-12 py-20', className)}>
      <div className="max-w-[18rem] w-full border border-stone-300 aspect-[9/16.5] rounded-3xl p-1.5">
        <div className="rounded-[18px] border border-stone-300 w-full h-full p-6 lg:px-7 lg:py-8 overflow-y-auto">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
