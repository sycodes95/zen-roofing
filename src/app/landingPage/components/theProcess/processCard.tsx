import { ProcessCard } from "./theProcess";

interface ProcessCardProps {
  card: ProcessCard;
  index: number;
}

export default function ProcessCard ({card, index} : ProcessCardProps) {
  return (
    <div className='flex items-center gap-8 p-4 text-jet  bg-opacity-50 rounded-lg  h-full bg-emerald-400' key={index} >
      <div className="p-2 h-full w-fit bg-white rounded-lg border border-emerald-400 ">
        {card.icon}
      </div>
      <div className="h-full w-full rounded-lg  flex grow">
        <span className=' font-display-2 text-left h-full flex  text-jet'>{card.description}</span>

      </div>
    </div>
  )
}