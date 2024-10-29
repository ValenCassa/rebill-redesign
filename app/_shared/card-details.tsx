"use client";

import { Field } from "@/components";
import Image from "next/image";

export const CardDetails = () => {
  return (
    <Field.Root>
      <Field.Label htmlFor="cardNumber">Datos de la tarjeta</Field.Label>
      <div className="w-full shadow-input-field rounded-md bg-base">
        <div className="flex rounded-t-md focus-within:shadow-input-field-focus h-8 transition-shadow border-b border-black/[0.06]">
          <input
            autoComplete="off"
            id="cardNumber"
            className="flex-1 bg-transparent outline-none pl-2 text-compact-sm font-medium appearance-none"
            placeholder="1234 1234 1234 1234"
            maxLength={19}
            onKeyDown={(e) => {
              const isNumber = /\d/.test(e.key); // Check if the key is a digit
              const allowedKeys = [
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
              ]; // Allow navigation and backspace

              if (!isNumber && !allowedKeys.includes(e.key)) {
                e.preventDefault(); // Prevent non-numeric input
              }
            }}
            onChange={(e) => {
              let value = e.currentTarget.value.replace(/\D/g, ""); // Remove non-digit characters
              value = value.match(/.{1,4}/g)?.join(" ") || ""; // Add a space every 4 characters
              e.currentTarget.value = value; // Directly modify the input's displayed value
            }}
          />
          <div className="px-[7px] flex items-center gap-1">
            <Image
              src="/visa-logo.png"
              width={32}
              height={18}
              alt="Visa logo"
            />
            <Image
              src="/mastercard-logo.png"
              width={28}
              height={18}
              alt="Mastercard logo"
            />

            <Image
              src="/amex-logo.png"
              width={28}
              height={18}
              alt="Amex logo"
            />
          </div>
        </div>

        <div className="flex h-8">
          <input
            autoComplete="off"
            maxLength={7}
            placeholder="MM/AA"
            className="bg-transparent border-r border-black/[0.06] h-full w-1/2 outline-none px-2 text-compact-sm font-medium placeholder:text-muted transition-all rounded-bl-md focus:shadow-input-field-focus"
            onKeyDown={(e) => {
              const isNumber = /\d/.test(e.key); // Check if the key is a digit
              const allowedKeys = [
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
              ]; // Allow navigation and backspace

              if (!isNumber && !allowedKeys.includes(e.key)) {
                e.preventDefault(); // Prevent non-numeric input
              }
            }}
            onChange={(e) => {
              let value = e.currentTarget.value.replace(/\D/g, ""); // Remove all non-digit characters
              value = value.slice(0, 4); // Limit to 4 digits for MMYY format

              // Insert `/` after the first two characters for MM/YY format
              if (value.length >= 3) {
                value = `${value.slice(0, 2)} / ${value.slice(2)}`;
              }

              e.currentTarget.value = value; // Set formatted value
            }}
          />
          <input
            autoComplete="off"
            placeholder="CVC"
            maxLength={3}
            className="bg-transparent h-full w-1/2 outline-none px-2 text-compact-sm font-medium placeholder:text-muted transition-all rounded-br-md focus:shadow-input-field-focus"
            onKeyDown={(e) => {
              const isNumber = /\d/.test(e.key); // Check if the key is a digit
              const allowedKeys = [
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
              ]; // Allow navigation and backspace

              if (!isNumber && !allowedKeys.includes(e.key)) {
                e.preventDefault(); // Prevent non-numeric input
              }
            }}
          />
        </div>
      </div>
    </Field.Root>
  );
};
