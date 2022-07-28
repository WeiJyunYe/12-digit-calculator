import Decimal from "decimal.js"

interface DisplayProps {
  display: string
  hasMemory: boolean
  expression: string
}

export default function Display({ display, hasMemory, expression }: DisplayProps) {
  return (
    <div className="flex flex-col h-[120px] w-[320px]">
      <div className="flex justify-between">
        <div className="flex h-[20px] font-bold text-gray-300 pl-2">
          {hasMemory && <span>M</span>}
        </div>
        <div className="flex text-gray-300 pr-2">
          {expression}
        </div>
      </div>
      <div className="flex h-[100px] pb-5 pr-2 justify-end items-end text-4xl font-bold text-white">
        {display}
      </div>
    </div>
  )
}