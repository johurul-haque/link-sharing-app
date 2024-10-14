import { createFileRoute } from '@tanstack/react-router';
import { MobileView } from '../layouts/mobile-view';
import { ProfileDetails } from '../layouts/profile-details';

export const Route = createFileRoute('/profile')({
  component: () => (
    <main className="grid md:grid-cols-5 [&>*]:bg-white [&>*]:rounded-t-lg gap-6 flex-1">
      <MobileView className="max-md:hidden col-span-2" />

      <ProfileDetails className="md:col-span-3" />
    </main>
  ),
});
