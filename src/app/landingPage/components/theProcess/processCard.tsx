import { ProcessCard } from "./theProcess";

interface ProcessCardProps {
  card: ProcessCard;
  index: number;
}

export default function ProcessCard ({card, index} : ProcessCardProps) {
  return (
    <div className='flex items-center gap-8 text-jet  bg-opacity-50 rounded-l-none rounded-xl h-full' key={index} >
      <div className="p-2 h-full w-fit bg-white rounded-xl  rounded-l-none">
        {card.icon}
      </div>
      <div className="h-12 items-center w-full flex">
        <span className=' font-inter-tight text-sm font-semibold text-left h-fit flex  text-white'>{card.description}</span>

      </div>
    </div>
  )
}