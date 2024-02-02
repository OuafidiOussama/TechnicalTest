import { useState } from 'react';
import InputComponent from "../components/InputComponent"
import background from "../assets/abstract-cube-cyan-purple-wallpaper-preview.jpg" 
import { CostumerType, PaimentMethodType } from '../types/DataTypes';

type Props={
  details: PaimentMethodType | undefined
  user: CostumerType | undefined
}

export default function FormComponent({details, user}: Props) {
  const [formData, setFormData] = useState({
    email: user?.email || '',
    name: user?.name || '',
    cardNumber: details?.cardNumber || '',
    expirationDate: details?.expirationDate || '',
    cvv: details?.cvv || '',
    address: user?.address || '',
    zip: ''
  })

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const isAllInputsFilled = () =>{
    return Object.values(formData).every(value=>value?.trim() !== '')
  }

  return (
    <form className=" h-full w-full lg:w-3/5 absolute right-0 rounded-t-[50px] lg:rounded-l-[150px] lg:rounded-tr-none xl:pl-44 py-10 px-20 flex flex-col justify-center overflow-clip shadow-2xl">
        <img src={background} className=" w-full h-full object-cover absolute left-0 -z-10 opacity-35" />
        <InputComponent value={user?.email} label="Email" name="email" type="text" placeHolder="Please provide your email" onChange={handleInputChange} />
        <InputComponent value={user?.name} label="Full Name" name="name" type="text" placeHolder="Please provide your full name" onChange={handleInputChange} />
        <InputComponent value={details?.cardNumber} label="Card Number" name="cardNumber" type="text" placeHolder="Please provide your card number" onChange={handleInputChange} />
        <div className="flex justify-between">
            <InputComponent value={details?.expirationDate} label="Expiration Date" name="expirationDate" type="text" placeHolder="MM / YY" onChange={handleInputChange} />
            <InputComponent value={details?.cvv} label="CVV" name="cvv" type="number" placeHolder="CVV" onChange={handleInputChange} />
        </div>
        <InputComponent value={user?.address} label="Address" name="address" type="text" placeHolder="Please provide your address" onChange={handleInputChange} />
        <InputComponent value="123" label="Zip Code" name="zip" type="text" placeHolder="Please provide your zip code" onChange={handleInputChange} />
        <button className={`py-2 px-5 bg-blue-500 rounded-md hover:bg-blue-800 duration-300 transition-all text-white text-xl font-bold ${!isAllInputsFilled() ? 'cursor-not-allowed': 'cursor-pointer'} `} type="submit" disabled={!isAllInputsFilled()}>Pay</button>
    </form>
  );
}
