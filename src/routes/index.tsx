import { createFileRoute } from '@tanstack/react-router';
import { CustomizeLinks } from '../layouts/customize-links';
import { MobileView } from '../layouts/mobile-view';

export const Route = createFileRoute('/')({
  component: () => (
    <main className="grid md:grid-cols-5 [&>*]:bg-white [&>*]:rounded-t-lg gap-6 flex-1">
      <MobileView className="max-md:hidden col-span-2" />

      <CustomizeLinks className="md:col-span-3 p-6" />
    </main>
  ),
});
