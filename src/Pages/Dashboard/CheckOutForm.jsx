import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckOutForm = () => {
    const [showTrxId, setShowTrxId] = useState('');
    const [error , setError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const {user} = useAuth();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0 )
    
    

    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice })
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
        .catch(err => {
            console.log(err);
        })
    } ,[])

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null) {
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        })
        if(error) {
            setError(error.message)
        }else{
            toast.success('payment method', paymentMethod)
            console.log('payment method', paymentMethod)
            setError('');
        }

        // Confirm Payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous' , 
                    email: user?.email || 'anonymous' , 
                }
            }
        } )
        if(confirmError){
            console.log('confirm error');
        }else {
            console.log('payment intent', paymentIntent);
        }
        if(paymentIntent.status === 'succeeded'){
            setShowTrxId(`Your Transaction Id is : ${paymentIntent.id}`)
            const payment = {
                email: user.email,
                price: totalPrice,
                date: new Date(), //
                transactionId: paymentIntent.id,
                cartIds : cart.map(item => item._id),
                menuitemIds : cart.map(item => item.menuId), 
                status: 'pending'
            }

            const res = await axiosSecure.post('/payments', payment)
            
            refetch();
            if(res.data?.paymentResult?.insertedId){
                Swal.fire({
                    position: "center-center",
                    icon: "success",
                    title: "Taka Paisi Dhonnobad",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
    }
    return (
       <form onSubmit={handleSubmit}>
        <CardElement
         options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        >
        </CardElement>





        <button className="btn btn-wide my-12" type="submit" disabled={!stripe || !clientSecret }>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      <p className="text-green-600">{showTrxId}</p>
       </form>
)};

export default CheckOutForm;