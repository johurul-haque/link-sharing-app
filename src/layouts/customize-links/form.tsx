import { Reorder, useDragControls } from 'framer-motion';
import { EqualIcon, LinkIcon } from 'lucide-react';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useLinksStore } from '../../store/links';
import { SelectPlatform } from './select-platform';

type Inputs = {
  links: {
    platform: string;
    url: string;
  }[];
};

export function CustomizeLinksForm() {
  const store = useLinksStore();
  const [activeIndex, setActiveIndex] = useState(0);

  const { register, control, handleSubmit, formState } = useForm<Inputs>({
    defaultValues: {
      links: store.links || Array(2).fill({ platform: '', url: '' }),
    },
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'links',
  });

  const onSubmit = ({ links }: Inputs) => {
    store.saveLinks(links);
    alert('Your changes have been successfully saved!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-8">
      <div className="px-6 my-6 lg:mt-8">
        <button
          onClick={() => append({ platform: '', url: '' })}
          className="border-2 border-primary text-primary font-semibold text-sm py-2 px-4 block w-full rounded-md hover:bg-secondary focus:ring-2 ring-secondary ring-offset-1 outline-none "
        >
          + Add new link
        </button>
      </div>

      <Reorder.Group
        values={fields}
        onReorder={(e) => {
          e.map((item, index) => {
            const itemIndex = fields.findIndex((value) => value.id === item.id);

            if (itemIndex === activeIndex) {
              move(activeIndex, index);
              setActiveIndex(index);
            }
          });
        }}
        className="px-6 pb-20 md:pb-6 space-y-5"
      >
        {fields.map((field, index) => {
          const controls = useDragControls();

          return (
            <Reorder.Item
              onDragStart={() => {
                setActiveIndex(index);
              }}
              value={field}
              dragListener={false}
              dragControls={controls}
              key={field.id}
            >
              <fieldset key={field.id} className="rounded-lg p-5 bg-gray-100">
                <div className="flex justify-between mb-4">
                  <legend className="font-semibold text-stone-600 flex items-center gap-1.5">
                    <button
                      onPointerDown={(e) => controls.start(e)}
                      className="cursor-grabbing"
                    >
                      <span className="sr-only">Drag to reposition</span>
                      <EqualIcon size={18} />
                    </button>
                    Link #{index + 1}
                  </legend>
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-stone-400 hover:text-stone-600 font-medium text-sm"
                  >
                    Remove
                  </button>
                </div>

                <Controller
                  name={`links.${index}.platform`}
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <SelectPlatform className="mb-3" {...field} />
                  )}
                />

                <label
                  htmlFor={`url-${index}`}
                  className="block text-xs mb-1.5"
                >
                  Link
                </label>
                <div className="h-11 flex items-center border border-stone-200 rounded-md overflow-hidden pl-4 focus-within:ring-2 ring-primary bg-white text-sm">
                  <LinkIcon size={18} className="stroke-stone-600" />

                  <input
                    type="url"
                    {...register(`links.${index}.url`, {
                      required: 'URL is required',
                      validate: (value) => {
                        if (!field.platform) return true;

                        const lowercaseUrl = value.toLowerCase();

                        if (
                          !lowercaseUrl.includes(field.platform.toLowerCase())
                        ) {
                          return `Please use ${field.platform}'s URL`;
                        }

                        return true;
                      },
                    })}
                    id={`url-${index}`}
                    className="grow h-full bg-transparent outline-none px-4"
                    required
                  />
                </div>
                {formState.errors.links?.[index]?.url && (
                  <p className="text-red-500 text-xs mt-1.5">
                    {formState.errors.links[index].url.message}
                  </p>
                )}
              </fieldset>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>

      <div className="md:contents max-md:fixed max-md:bottom-0 max-md:inset-x-0 max-md:pb-6 max-md:bg-white">
        <hr />

        <button className="bg-primary text-white px-6 py-2.5 rounded-md font-medium mt-6 mr-6 ml-auto block hover:opacity-90">
          Save
        </button>
      </div>
    </form>
  );
}
