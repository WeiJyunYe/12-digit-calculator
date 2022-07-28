export default function Button({ children, onClick }: {
  children: React.ReactNode,
  onClick: () => any,
}) {

  if (children === "=") {
    return (
      <div className="flex justify-center items-center text-white text-xl font-bold bg-sky-700 hover:bg-sky-800 focus:bg-sky-800 active:bg-sky-700 transition-colors duration-200 h-[60px] w-[160px] outline outline-1 outline-black/80 select-none" onClick={onClick}>
        {children}
      </div>
    )
  } else if (children === "AC") {
    return (
      <div className="flex justify-center items-center text-white text-xl font-bold bg-red-900/80 hover:bg-red-900 active:bg-red-900/80 transition-colors duration-200 h-[60px] w-[80px] outline outline-1 outline-black/80 select-none" onClick={onClick}>
        {children}
      </div>
    )
  } else if (children === "+" || children === "-" || children === "x" || children === "÷") {
    return (
      <div className="flex justify-center items-center text-white text-xl font-bold bg-neutral-700/95 hover:bg-neutral-700 active:bg-neutral-700/95 transition-colors duration-200 h-[60px] w-[80px] outline outline-1 outline-black/80 select-none" onClick={onClick}>
        {children}
      </div>
    )
  } else if (children === "MR") {
    return (
      <div className="flex justify-center items-center text-white text-xl font-bold bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-700/95 transition-colors duration-200 h-[60px] w-[80px] outline outline-1 outline-black/80 select-none" onClick={onClick}>
        {children}
      </div>
    )
  } else {
    return (
      <div className="flex justify-center items-center text-white text-xl font-bold bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-700/95 transition-colors duration-200 h-[60px] w-[80px] outline outline-1 outline-black/80 select-none" onClick={onClick}>
        {children}
      </div>
    )
  }
}