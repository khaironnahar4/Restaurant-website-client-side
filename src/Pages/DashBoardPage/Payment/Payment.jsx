import { Elements } from "@stripe/react-stripe-js";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm ";

// need publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

function Payment() {
  return (
    <div className="flex-col items-center w-full">
      <SectionHeading
        heading="Payment"
        subHeading="Please complete the payment to place order."
      ></SectionHeading>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
