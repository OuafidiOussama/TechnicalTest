import { ItemType } from "../types/DataTypes"
import ItemComponent from "./ItemComponent"

type Props = {
  items: ItemType[] | undefined,
  totalPrice: number | undefined
}


export default function ItemsContainer({items, totalPrice}: Props) {
  return (
    items ? (
        <div>
            {items.map(item=><ItemComponent key={item.productId} item={item} />)}
            <div className="text-right md:pr-20">
              <p className="text-xl font-semibold">Total Price</p>
              <p className="text-4xl font-bold">${totalPrice}</p>
            </div>
        </div>
    ) : 'Nothing To Pay For'
  )
}
