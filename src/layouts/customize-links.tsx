export function CustomizeLinks({ className }: { className?: string }) {
  return (
    <section className={className}>
      <h1 className="font-bold text-2xl tracking-wide mb-2.5">
        Customize your links
      </h1>
      <p className="text-sm text-gray-500 font-medium">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button className="border-2 border-primary text-primary font-semibold text-sm py-2 px-4 block w-full rounded-md my-5 lg:my-8">
        + Add new link
      </button>
    </section>
  );
}
