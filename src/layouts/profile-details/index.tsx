import { ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '../../lib/cn';
import { useProfileStore } from '../../store/profile';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
};

export function ProfileDetails({ className }: { className?: string }) {
  const profileStore = useProfileStore();

  const [imgSrc, setImgSrc] = useState(profileStore.image || '');

  const form = useForm<Inputs>({
    defaultValues: {
      firstName: profileStore.name?.split(' ')[0],
      lastName: profileStore.name?.split(' ')[1],
      email: profileStore.email,
    },
  });

  const onSubmit = (data: Inputs) => {
    const name = `${data.firstName.trim()} ${data.lastName.trim()}`;
    profileStore.saveData({ name, email: data.email, image: imgSrc });
  };

  return (
    <section className={className}>
      <div className="p-6 lg:p-8">
        <h1 className="font-bold text-2xl tracking-wide mb-2.5">
          Profile Details
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 mb-6">
        <div className="px-6 lg:px-8 space-y-6 lg:space-y-8">
          <fieldset className="rounded-lg p-5 bg-gray-100">
            <dl className="grid grid-cols-3 gap-5">
              <dt className="font-medium text-stone-500 self-center">
                Profile picture
              </dt>

              <dd className="grid grid-cols-2 gap-5 col-span-2">
                <label
                  htmlFor="profile"
                  className="bg-white rounded-xl overflow-hidden aspect-square relative cursor-pointer"
                >
                  <div
                    className={cn(
                      'absolute inset-0 flex flex-col justify-center items-center gap-4 z-10',
                      imgSrc &&
                        'transition text-white/80 bg-neutral-900/30 hover:bg-neutral-900/60 hover:text-white/95'
                    )}
                  >
                    <ImageIcon size={50} strokeWidth={1.5} />
                    <span className="font-medium">Change Image</span>
                  </div>

                  {imgSrc && (
                    <img
                      src={imgSrc}
                      className="absolute inset-0 object-cover h-full w-full"
                      alt={`Image of ${form.getValues('firstName')}`}
                    />
                  )}

                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .webp"
                    id="profile"
                    onChange={(e) => {
                      const { files } = e.target;

                      if (files) {
                        const reader = new FileReader();

                        reader.onloadend = () => {
                          setImgSrc(reader.result as string);
                        };

                        reader.readAsDataURL(files[0]);
                      }
                    }}
                    hidden
                  />
                </label>

                <p className="self-center text-xs text-gray-500 font-medium">
                  Image must be below 1024&times;1024px. Use PNG, JPG, or WEBP
                  format.
                </p>
              </dd>
            </dl>
          </fieldset>

          <div className="rounded-lg p-5 space-y-3 bg-gray-100 [&>*]:grid [&>*]:grid-cols-3 [&>*]:items-center [&>*>label]:font-medium [&>*>label]:text-stone-500">
            <fieldset>
              <label htmlFor="first-name">
                First name<sup>*</sup>
              </label>
              <input
                type="text"
                {...form.register('firstName')}
                id="first-name"
                className="col-span-2 h-11 flex items-center border border-stone-200 rounded-md overflow-hidden pl-4 focus:ring-2 ring-primary bg-white text-sm outline-none"
                placeholder="John"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="last-name">
                Last name<sup>*</sup>
              </label>
              <input
                type="text"
                {...form.register('lastName')}
                id="last-name"
                className="col-span-2 h-11 flex items-center border border-stone-200 rounded-md overflow-hidden pl-4 focus:ring-2 ring-primary bg-white text-sm outline-none"
                placeholder="Doe"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...form.register('email')}
                id="email"
                className="col-span-2 h-11 flex items-center border border-stone-200 rounded-md overflow-hidden pl-4 focus:ring-2 ring-primary bg-white text-sm outline-none"
                placeholder="john@example.com"
              />
            </fieldset>
          </div>
        </div>

        <hr className="mt-10 mb-6 lg:mb-8" />

        <button className="bg-primary text-white px-6 py-2.5 rounded-md font-medium mt-6 mr-6 lg:mt-8 lg:mr-8 ml-auto block hover:opacity-90">
          Save
        </button>
      </form>
    </section>
  );
}
