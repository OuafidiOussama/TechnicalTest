type Props = {
    label: string,
    name: string,
    type: string,
    placeHolder: string,
    value?: string
    onChange: any
}

export default function InputComponent({label, name, type, placeHolder, onChange, value} : Props) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        name={name}
        id={name} 
        type={type} 
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
