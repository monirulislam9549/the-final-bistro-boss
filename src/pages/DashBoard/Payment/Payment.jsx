import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  console.log(price);
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please Provide"}
      ></SectionTitle>
      <h1>Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} cart={cart}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
