import { XMarkIcon } from "@/components/icons/x-mark-icon";

export const TotalDetails = () => {
  return (
    <div className="space-y-3">
      <div className="w-full flex items-center justify-between text-compact-sm font-medium text-subtle">
        <p>Subtotal</p>
        <p>$ 134.00</p>
      </div>
      <div className="w-full h-5 flex items-center justify-between text-compact-sm font-medium text-subtle">
        <div className="flex items-center gap-2">
          <p>Descuento</p>
          <span className="bg-chip-crimson text-chip-crimson font-medium text-compact-xs rounded h-[22px] pl-1.5 pr-1 flex items-center gap-1">
            BLACKFRIDAY
            <button
              type="button"
              className="outline-none text-chip-icon hover:text-crimson-400"
            >
              <XMarkIcon className="size-4" />
            </button>
          </span>
        </div>
        <p>$ 13.40</p>
      </div>

      <div className="w-full flex items-center justify-between text-compact font-medium">
        <p>Total</p>
        <p>$ 120.60</p>
      </div>
    </div>
  );
};
