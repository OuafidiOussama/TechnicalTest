import { ItemType } from "../types/DataTypes"


type Props = {
    item: ItemType
}


export default function ItemComponent({item} : Props) {
  return (
    <div className="pb-5">
        <p className="text-xl font-medium">{item.name}</p>
        <div className="flex gap-2 pl-3">
            <p className="">qty: {item.quantity}</p>
            <p className="">x</p>
            <p className="">${item.price}</p>
        </div>
    </div>
  )
}
