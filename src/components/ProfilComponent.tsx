import profil from '../assets/cat-5183427_1280.jpg'
import {Icon} from '@iconify/react'
import { CostumerType } from '../types/DataTypes'

type Props = {
  user: CostumerType | undefined
}

export default function ProfilComponent({user}: Props) {
  return (
    <div className="h-18 pb-5 relative group overflow-clip">
        <div className="group-hover:invisible flex items-center gap-3">
            <img src={profil} alt="" className="w-14 h-14 object-cover rounded-full"/>
            <div >
            <p className='text-lg font-medium'>{user?.name}</p>
            <p className='text-sm truncate'>{user?.email}</p>
            </div>
        </div>
        <div className="absolute -top-0 -left-0 -translate-x-32 duration-300 transition-all group-hover:translate-x-0 flex gap-3 items-center">
            <Icon icon="ep:back" className="w-14 h-14 rounded-full bg-gray-100 "/>
            <p className="font-bold">Back</p>
        </div>
    </div>
  )
}
