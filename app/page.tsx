import { PaymentDetails } from "./_shared/payment-details";
import { ProductDescription } from "./_shared/product-description";

export default function Home() {
  return (
    <div className="flex h-full flex-1">
      <ProductDescription />
      <PaymentDetails />
    </div>
  );
}
