import { createFileRoute, Link } from '@tanstack/react-router';
import { ProfileCard } from '../components/profile-card';

export const Route = createFileRoute('/preview')({
  component: () => (
    <>
      <div className="absolute inset-x-0 top-0 h-[clamp(350px,40vh,600px)] xl:h-[clamp(380px,50vh,700px)] bg-primary rounded-b-2xl -z-10 max-sm:hidden" />

      <header className="flex justify-between items-center sm:p-3 lg:p-4 mx-auto sm:bg-white rounded-lg my-4 sm:my-5 lg:my-6 w-full">
        <Link
          to="/"
          className="px-5 py-2 rounded-md border-2 border-primary text-primary font-semibold hover:bg-secondary max-lg:text-sm box-border"
        >
          Back to Editor
        </Link>

        <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:opacity-90 max-lg:text-sm">
          Share Link
        </button>
      </header>

      <main className="flex-1 grid sm:place-items-center">
        <article className="sm:bg-white sm:px-6 sm:pt-8 sm:pb-6 rounded-xl max-w-[16rem] mx-auto w-full max-sm:mt-24">
          <ProfileCard previewMode />
        </article>
      </main>
    </>
  ),
});
