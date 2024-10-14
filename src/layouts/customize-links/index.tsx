import { Form } from './form';

export function CustomizeLinks({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="p-6 pb-0">
        <h1 className="font-bold text-2xl tracking-wide mb-2.5">
          Customize your links
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      <Form />
    </section>
  );
}
