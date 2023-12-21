import { ProcessCard } from "./theProcess";

interface ProcessCardProps {
  card: ProcessCard;
  index: number;
}

export default function ProcessCard ({card, index} : ProcessCardProps) {
  return (
    <div className='flex items-center gap-8 text-jet rounded-l-none rounded-xl h-full' key={index} >
      <div className="p-2 h-full w-fit  rounded-xl border-2 border-black rounded-l-none">
        {card.icon}
      </div>
      <div className="h-full p-4 items-center w-full flex bg-stone-300 border border-stone-300 rounded-l-xl bg-opacity-90">
        <span className=' font-inter-tight text-sm font-semibold text-left h-fit flex  text-jet'>{card.description}</span>

      </div>
    </div>
  )
}