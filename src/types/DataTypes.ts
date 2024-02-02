export type ItemType= {
    productId: string,
    name: string,
    quantity: number,
    price: number,
}

export type OrderType = {
    items: ItemType[],
    totalPrice: number
}

export type CostumerType = {
    name: string,
    email: string,
    address: string,
}

export type PaimentMethodType = {
    type: string,
    cardNumber: string,
    expirationDate: string,
    cvv: string,
}


export type DataType = {
    order: OrderType,
    customer: CostumerType,
    paymentMethod: PaimentMethodType,
}