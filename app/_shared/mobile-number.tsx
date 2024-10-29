"use client";

import { Field } from "@/components";
import { ChevronIcon } from "@/components/icons/chevron";

export const MobileNumber = () => {
  return (
    <Field.Root>
      <Field.Label htmlFor="countryCode">Número de celular</Field.Label>
      <div className="w-full bg-base rounded-md shadow-input-field flex h-8">
        <button
          type="button"
          tabIndex={0}
          className="flex items-center gap-1.5 pl-2 pr-1.5 bg-zinc-50 border-r border-black/[0.06] outline-none focus:shadow-input-field-focus h-full transition-all rounded-l-md"
        >
          <div className="flex items-center gap-1 text-compact-sm font-medium">
            <span>🇦🇷</span>
            <p>+54</p>
          </div>
          <ChevronIcon className="size-4 text-muted" />
        </button>

        <input
          onKeyDown={(e) => {
            const isNumber = /\d/.test(e.key); // Check if the key is a digit
            const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"]; // Allow navigation and backspace

            if (!isNumber && !allowedKeys.includes(e.key)) {
              e.preventDefault(); // Prevent non-numeric input
            }
          }}
          className="bg-transparent border-r border-black/[0.06] h-full flex-1 outline-none px-2 text-compact-sm font-medium placeholder:text-muted transition-all rounded-r-md focus:shadow-input-field-focus"
        />
      </div>
    </Field.Root>
  );
};
