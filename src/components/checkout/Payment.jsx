import Button from "../ui/Button";
import { useState } from "react";

export default function Payment({ setOrder, order, eligiblePaymentMethods }) {
  const [paymentMethod, setPaymentMethod] = useState({});
  const [paymentMethods, setPaymentMethods] = useState(eligiblePaymentMethods);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setOrder({ ...order, state: "PaymentSettled" });
      }}
    >
      <div className="text-lg bg-neutral-100 p-sm mb-xs">Step 2: Payment</div>
      <div className="text-sm my-xs text-neutral-700">
        Please select the payment method and authorized with the provider.
      </div>
      <div className="flex">
        {paymentMethods.map((item, index) => (
          <div className="flex items-center py-sm mr-sm" key={index}>
            <input
              type="radio"
              name="payment"
              value={item.id}
              required
              onClick={() => setPaymentMethod(item)}
            />
            <label className="ml-xs">{item.name}</label>
          </div>
        ))}
      </div>
      <div className="mt-sm">
        <Button submit>Next</Button>
      </div>
      <div className="mt-xs">
        <Button
          type="neutral"
          onClick={() => {
            setOrder({ ...order, state: "AddingItems" });
          }}
        >
          ← Modify shipping details
        </Button>
      </div>
    </form>
  );
}
