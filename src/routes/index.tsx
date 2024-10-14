import { createFileRoute } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { ProfileCard } from '../components/profile-card';
import { CustomizeLinksForm } from '../layouts/customize-links/form';

export const Route = createFileRoute('/')({
  component: () => (
    <main className="grid md:grid-cols-5 [&>*]:bg-white [&>*]:rounded-t-lg gap-6">
      <section className="grid place-items-center px-12 py-20 max-md:hidden col-span-2">
        <PhoneBorder>
          <ProfileCard />
        </PhoneBorder>
      </section>

      <section className="md:col-span-3">
        <div className="p-6 pb-0">
          <h1 className="font-bold text-2xl tracking-wide mb-2.5">
            Customize your links
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>

        <CustomizeLinksForm />
      </section>
    </main>
  ),
});

function PhoneBorder({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[18rem] w-full border border-stone-300 aspect-[9/16.5] rounded-3xl p-1.5">
      <div className="rounded-[18px] border border-stone-300 w-full h-full p-6 lg:px-7 lg:py-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
