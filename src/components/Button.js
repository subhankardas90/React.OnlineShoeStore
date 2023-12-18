
const Button = ({label, iconURL}) => {
  return (
   <button className="flex justify-center items-center gap-2 px-7 py-4 
   fonts-montserrat text-lg leading-none bg-red-500 rounded-full
    text-white border border-red-500">
    {label}
    {iconURL && <img src={iconURL} alt="arrow icon" className="ml-2 rounded-full w-5 h-5"/>}
   </button>
  )
}

export default Button