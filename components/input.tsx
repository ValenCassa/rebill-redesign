import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input
      autoComplete="off"
      type="text"
      className="w-full rounded-md text-compact-sm font-medium bg-base px-2 shadow-input-field focus:shadow-input-field-focus outline-none transition-all placeholder:text-muted h-8 flex items-center"
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input };
export type { InputProps };
