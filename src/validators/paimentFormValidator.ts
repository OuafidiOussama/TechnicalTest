import * as yup from 'yup'

export const paymentSchema = yup.object({
    name: yup
    .string()
    .required('Your Full name Is Required'),
    email: yup
    .string()
    .required('Your Email Is Required'),
    address: yup
    .string()
    .required('Your Address Is Required'),
    cardNumber: yup
    .string()
    .required('Credit Card Number Is Required'),
    expirationDate: yup
    .string()
    .required('Expiration Date Is Required'),
    cvv: yup
    .string()
    .required('CVV Is Required')
})