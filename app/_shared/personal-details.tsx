"use client";

import { Field } from "@/components";
import { ChevronIcon } from "@/components/icons/chevron";

export const PersonalDetails = () => {
  return (
    <Field.Root>
      <Field.Label htmlFor="province">Datos personales</Field.Label>
      <div className="w-full shadow-input-field rounded-md bg-base">
        <button
          type="button"
          className="flex items-center justify-between rounded-t-md outline-none text-compact-sm focus:shadow-input-field-focus h-8 pl-2 pr-1.5 font-medium transition-shadow border-b border-black/[0.06] text-muted w-full"
          tabIndex={0}
        >
          Provincia
          <ChevronIcon className="size-4 text-muted" />
        </button>

        <div className="flex h-8 border-b border-black/[0.06]">
          <input
            autoComplete="off"
            placeholder="Ciudad"
            className="bg-transparent border-r border-black/[0.06] h-full w-1/2 outline-none px-2 text-compact-sm font-medium placeholder:text-muted transition-all focus:shadow-input-field-focus"
          />
          <input
            autoComplete="off"
            placeholder="Código postal"
            className="bg-transparent h-full w-1/2 outline-none px-2 text-compact-sm font-medium placeholder:text-muted transition-all focus:shadow-input-field-focus"
          />
        </div>

        <div className="flex h-8">
          <input
            autoComplete="off"
            placeholder="Dirección"
            className="bg-transparent border-r border-black/[0.06] h-full w-1/2 outline-none px-2 text-compact-sm font-medium placeholder:text-muted transition-all rounded-bl-md focus:shadow-input-field-focus"
          />
          <input
            autoComplete="off"
            placeholder="Departamento"
            className="bg-transparent h-full w-1/2 outline-none px-2 text-compact-sm font-medium placeholder:text-muted transition-all rounded-br-md focus:shadow-input-field-focus"
          />
        </div>
      </div>
    </Field.Root>
  );
};
