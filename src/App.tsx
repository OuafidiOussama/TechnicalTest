import { useQuery } from "@tanstack/react-query"
import FormComponent from "./components/FormComponent"
import ItemsContainer from "./components/ItemsContainer"
import ProfilComponent from "./components/ProfilComponent"
import { fetchData } from "./data/data"

function App() {
  const {data, isLoading} = useQuery({
    queryFn: ()=>fetchData(),
    queryKey: ['data'],
  })
  const details = data?.paymentMethod
  const user = data?.customer
  const items  = data?.order.items
  const totalPrice = data?.order.totalPrice

  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden py-14 bg-gradient-to-r from-purple-500 to-purple-900">
      <div className="h-full w-4/5 bg-white rounded-xl lg:flex relative overflow-clip drop-shadow-xl overflow-y-auto ">
        <div className="h-full w-full lg:w-2/5 flex flex-col p-10 md:p-20 md:pr-0 lg:pl-24 lg:px-0 overflow-y-auto">
          <h1 data-testid="header" className="text-3xl font-semibold">Goods To Be Paid</h1>
          <div className="h-full flex flex-col justify-center">
            {isLoading ? <>Loading...</> 
            :
            <><ProfilComponent user={user} />
            <ItemsContainer items={items} totalPrice={totalPrice} /></>}
          </div>
        </div>
        <FormComponent details={details} user={user} />
      </div>
    </div>
    
  )
}

export default App
