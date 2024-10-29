import { Field, Input } from "@/components";
import { CardDetails } from "./card-details";
import { PersonalDetails } from "./personal-details";
import { MobileNumber } from "./mobile-number";
import { TotalDetails } from "./total-details";
import { Payment } from "./payment";

export const PaymentDetails = () => {
  return (
    <div className="sm:flex-1 p-16 border-l border-black/[0.08]">
      <form className="max-w-[380px] w-full pt-[52px] space-y-8">
        <div className="space-y-1">
          <h1 className="text-xl font-medium">Detalles del pago</h1>
          <p className="text-compact text-subtle">
            Detallá los datos de tu compra para completar el pago
          </p>
        </div>

        <div className="space-y-3">
          <Field.Root>
            <Field.Label htmlFor="email">Correo electrónico</Field.Label>
            <Input id="email" />
          </Field.Root>

          <div className="flex items-center gap-3">
            <Field.Root>
              <Field.Label htmlFor="name">Nombre</Field.Label>
              <Input id="name" />
            </Field.Root>
            <Field.Root>
              <Field.Label htmlFor="lastName">Apellido</Field.Label>
              <Input id="lastName" />
            </Field.Root>
          </div>

          <CardDetails />

          <Field.Root>
            <Field.Label htmlFor="dni">DNI</Field.Label>
            <Input id="dni" />
          </Field.Root>

          <PersonalDetails />

          <MobileNumber />

          <Field.Root>
            <Field.Label htmlFor="discount" optional>
              Código de descuento
            </Field.Label>
            <Input id="discount" defaultValue={"BLACKFRIDAY"} />
          </Field.Root>
        </div>

        <TotalDetails />

        <Payment />
      </form>
    </div>
  );
};
