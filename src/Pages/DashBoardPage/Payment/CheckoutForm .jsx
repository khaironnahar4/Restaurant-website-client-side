import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Auth/UseAuth/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const [error, setError] = useState();
  const [clientSecret, setClientSecrete] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if(cart.length > 0){
      axiosSecure
      .post("/create-checkout-session", { price: totalCost })
      .then((res) => {
        // console.log("card secret ", res.data.client_secret);
        setClientSecrete(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalCost]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("tansection id ", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          price: totalCost,
          date: new Date(),
          transictionId: paymentIntent.id,
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.cardId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payment", payment);
        console.log("payment saved ", res.data);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Pyment completed!",
            text: "Your payment has been successfully completed.",
            icon: "success",
          });
        }
        refetch();
        navigate("/dashboard/payment-history");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#D1A054",
            },
          },
        }}
      />
      <button
        className="bg-[#D1A054] py-2 px-4 text-white rounded-md mt-6"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600">Your transactionId: {transactionId}</p>
      )}
    </form>
  );
}

export default CheckoutForm;
