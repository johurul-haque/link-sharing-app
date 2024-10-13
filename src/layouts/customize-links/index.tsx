import { Form } from './form';

export function CustomizeLinks({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="p-6">
        <h1 className="font-bold text-2xl tracking-wide mb-2.5">
          Customize your links
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button className="border-2 border-primary text-primary font-semibold text-sm py-2 px-4 block w-full rounded-md mt-5 lg:mt-8 hover:bg-secondary focus:ring-2 ring-secondary ring-offset-1 outline-none">
          + Add new link
        </button>
      </div>

      <Form />
    </section>
  );
}
