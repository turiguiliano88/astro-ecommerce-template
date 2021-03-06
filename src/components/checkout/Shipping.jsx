import Button from "../ui/Button";
import Input from "../ui/Input";
import { useState } from "react";

export default function Shipping({ setOrder, order, eligibleShippingMethods }) {
  const [shippingMethod, setShippingMethod] = useState(0);
  const [shippingMethods, setShippingMethods] = useState(
    eligibleShippingMethods
  );
  const [fullName, setFullName] = useState("");
  const [streetLine1, setStreetLine1] = useState("");
  const [streetLine2, setStreetLine2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setOrder({ ...order, state: "ArrangingPayment" });
      }}
    >
      <div className="text-lg bg-neutral-100 p-sm mb-xs">Step 1: Shipping</div>
      <div className="text-sm my-xs text-neutral-700">
        Please select the shipping method and fill out your shipping address.
      </div>
      <div className="flex">
        {shippingMethods.map((item, index) => (
          <div className="flex items-center py-sm mr-sm" key={index}>
            <input
              type="radio"
              name="shipping"
              value={item.id}
              required
              onClick={() => setShippingMethod(item.id)}
            />
            <label className="ml-xs">{item.name}</label>
          </div>
        ))}
      </div>
      <div className="mb-xs">
        <Input
          type="text"
          label="Full name*"
          required
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div className="mb-xs">
        <Input
          type="text"
          label="Street Line 1*"
          required
          onChange={(event) => setStreetLine1(event.target.value)}
        />
      </div>
      <div className="mb-xs">
        <Input
          type="text"
          label="Street Line 2"
          onChange={(event) => setStreetLine2(event.target.value)}
        />
      </div>
      <div className="flex flex-wrap mb-xs">
        <div className="w-full md:w-1/2 pr-2">
          <Input
            type="text"
            label="City*"
            required
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Input
            type="text"
            label="Province"
            onChange={(event) => setProvince(event.target.value)}
          />
        </div>
      </div>
      <div className="mb-xs">
        <Input
          type="tel"
          label="Phone number"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div className="mt-sm">
        <Button submit>Next</Button>
      </div>
    </form>
  );
}
