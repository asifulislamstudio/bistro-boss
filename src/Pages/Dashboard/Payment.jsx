import { loadStripe } from "@stripe/stripe-js";
import AdminSectionTitle from "../Home/Shared/AdminSectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
// TODO: Add Publishable key
 const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)
const Payment = () => {
    return (
        <div>
            <AdminSectionTitle heading={'Payment'} subHeading={'Pay to Eat'}></AdminSectionTitle>
           <div className="my-24">
           <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;