/* -------- Field.Root -------- */

import { ComponentPropsWithoutRef, forwardRef } from "react";

type FieldRootProps = ComponentPropsWithoutRef<"div">;
const FieldRoot = forwardRef<HTMLDivElement, FieldRootProps>((props, ref) => {
  const { className, ...rest } = props;

  return <div className="space-y-1.5 w-full" {...rest} ref={ref} />;
});

FieldRoot.displayName = "Field.Root";

/* -------- Field.Label -------- */

type FieldLabelProps = ComponentPropsWithoutRef<"label"> & {
  optional?: boolean;
};
const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  (props, ref) => {
    const { className, optional, ...rest } = props;

    return (
      <div className="inline-flex items-center gap-1">
        <label
          className="text-compact-sm font-medium text-subtle"
          {...rest}
          ref={ref}
        />
        {optional ? (
          <span className="text-compact-sm text-muted font-medium">
            (opcional)
          </span>
        ) : null}
      </div>
    );
  }
);

FieldLabel.displayName = "Field.Label";

/* Exports */

export { FieldRoot as Root, FieldLabel as Label };
export type { FieldRootProps as RootProps, FieldLabelProps as LabelProps };
